/* eslint-disable no-console */
const express = require('express');
const nextjs = require('next');
const cookieParser = require('cookie-parser');
const get = require('lodash/get');
const requireAuthentication = require('./lib/require-authentication');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = nextjs({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cookieParser());
  // server.use((req, res, next) => {
  //   const baseUserName = req.cookies.user_name;
  //   console.log('user name:', Buffer.from(encodeURIComponent(baseUserName), 'base64').toString('utf-8'));
  //   next();
  // });

  // server.all('*', asyncHandler(requireAuthentication));
  server.all('/favicon.ico', (req, res) => res.redirect('https://cdn.komachine.com/static/favicon.ico'));

  server.get('/categories', (req, res) => app.render(req, res, '/categories/list', req.query));

  server.get('/synonyms', (req, res) => app.render(req, res, '/synonyms/list', req.query));
  server.get('/synonyms/ko', (req, res) => app.render(req, res, '/synonyms/list', req.query));
  server.get('/synonyms/en', (req, res) => app.render(req, res, '/synonyms/list', req.query));

  server.get('/translations', (req, res) => app.render(req, res, '/translations/list', req.query));
  server.get('/translations/en', (req, res) => app.render(req, res, '/translations/list', req.query));
  server.get('/translations/zh-hans', (req, res) => app.render(req, res, '/translations/list', req.query));
  server.get('/translations/vi', (req, res) => app.render(req, res, '/translations/list', req.query));

  server.get('/inquiry', (req, res) => app.render(req, res, '/inquiry/list', req.query));
  server.get('/inquiry/komachine', (req, res) => app.render(req, res, '/inquiry/list', req.query));
  server.get('/inquiry/registration', (req, res) => app.render(req, res, '/inquiry/list', req.query));
  server.get('/inquiry/relation', (req, res) => app.render(req, res, '/inquiry/list', req.query));
  server.get('/inquiry/company', (req, res) => app.render(req, res, '/inquiry/list', req.query));

  server.get('/about/:id', (req, res) => app.render(req, res, '/about', { ...req.params, ...req.query }));

  server.get('*', (req, res) => handle(req, res));

  server.use((err, req, res, next) => {
    console.error(err.stack);
    const errResponseCode = get(err, 'response.status', 500);
    const statusCode = err.statusCode || errResponseCode;
    res.status(statusCode).send(`${statusCode}에러가 발생했습니다.`);
    next(err);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
