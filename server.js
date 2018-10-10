const express = require('express');
const next = require('next');
const mobxReact = require('mobx-react');
mobxReact.useStaticRendering(true);

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const cookieParser = require('cookie-parser');

app.prepare()
  .then(() => {
    const server = express();
    server.use(cookieParser());
    server.use((req, res, next) => {
      const baseUserName = req.cookies.user_name;
      console.log('user name:', Buffer.from(encodeURIComponent(baseUserName), 'base64').toString('utf-8'));
      next();
    });
    server.get('/a', (req, res) => {
      return app.render(req, res, '/about', req.query);
    });

    server.get('/b', (req, res) => {
      return app.render(req, res, '/', req.query);
    });

    server.get('/about/:id', (req, res) => {
      return app.render(req, res, '/about', {id: req.params.id});
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });


    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });