const express = require('express');
require('dotenv').config();
const next = require('next');
const bodyParser = require('body-parser');
const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const setupRoutes = require('./src/routes/index');
const LRUCache = require('lru-cache');
const compression = require('compression');

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 * 24 * 5, // 5 days
});

app.prepare().then(() => {
  const server = express();
  server.use(compression());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  //setup API routes
  setupRoutes(server);

  server.get('/', (req, res) => {
    renderAndCache(req, res, '/');
  });

  server.get('/blog', (req, res) => {
    renderAndCache(req, res, '/blog');
  });

  server.get('/blog/:id', (req, res) => {
    const { id } = req.params;
    renderAndCache(req, res, `/blog/${id}`);
  });

  server.get('/about', (req, res) => {
    renderAndCache(req, res, '/about');
  });

  server.get('/contact', (req, res) => {
    renderAndCache(req, res, '/contact');
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

function getCacheKey(req) {
  return `${req.url}`;
}

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  // If we have the page in cache, serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    console.log('served from cache');
    return;
  }

  try {
    // If not let's render the page into HTML
    console.log('not served from cache');
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}
