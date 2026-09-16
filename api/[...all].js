const app = require('../backend/server');

module.exports = (req, res) => {
  if (!req.url.startsWith('/')) {
    req.url = '/' + req.url;
  }
  if (req.query && req.query['all'] && !req.url.startsWith('/api/')) {
    const segments = Array.isArray(req.query.all) ? req.query.all.join('/') : req.query.all;
    req.url = '/api/' + segments;
  }
  return app(req, res);
};
