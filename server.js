const express = require('express');
const nextjs = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = nextjs({ dev });
const handle = app.getRequestHandler();
const cookieParser = require('cookie-parser');

app.prepare().then(() => {
  const server = express();
  server.use(cookieParser());
  // server.use((req, res, next) => {
  //   const baseUserName = req.cookies.user_name;
  //   console.log('user name:', Buffer.from(encodeURIComponent(baseUserName), 'base64').toString('utf-8'));
  //   next();
  // });

  const requireAuthentication = (req, res, next) => {
    if (!('access_token' in req.cookies)) {
      const host = dev ? 'http://localhost:8000' : 'https://www.komachine.com';
      res.redirect(host);
    } else {
      next();
    }
  };

  server.all('*', requireAuthentication);

  server.get('/a', (req, res) => app.render(req, res, '/about', req.query));

  // server.get('/companies', (req, res) => app.render(req, res, '/companies/list', req.query));
  // server.get('/companies/img-logo', (req, res) => app.render(req, res, '/companies/list', req.query));
  // server.get('/companies/prod-proc1', (req, res) => app.render(req, res, '/companies/list', req.query));
  // server.get('/companies/prod-proc2', (req, res) => app.render(req, res, '/companies/list', req.query));

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

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
