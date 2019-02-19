/* eslint-disable no-console */
const express = require('express');
const nextjs = require('next');
const cookieParser = require('cookie-parser');
const get = require('lodash/get');
const has = require('lodash/has');
const qs = require('qs');
const axios = require('axios');

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

  server.all('/favicon.ico', (req, res) => res.redirect('https://cdn.komachine.com/static/favicon.ico'));

  server.get('/synonyms/ko', (req, res) => app.render(req, res, '/synonyms/index', req.query));
  server.get('/synonyms/en', (req, res) => app.render(req, res, '/synonyms/index', req.query));

  server.get('/translations/en', (req, res) => app.render(req, res, '/translations/index', req.query));
  server.get('/translations/zh-hans', (req, res) => app.render(req, res, '/translations/index', req.query));
  server.get('/translations/vi', (req, res) => app.render(req, res, '/translations/index', req.query));

  server.get('/inquiry/komachine', (req, res) => app.render(req, res, '/inquiry/index', req.query));
  server.get('/inquiry/registration', (req, res) => app.render(req, res, '/inquiry/index', req.query));
  server.get('/inquiry/relation', (req, res) => app.render(req, res, '/inquiry/index', req.query));
  server.get('/inquiry/company', (req, res) => app.render(req, res, '/inquiry/index', req.query));

  server.get('/about/:id', (req, res) => app.render(req, res, '/about', { ...req.params, ...req.query }));

  server.get('/auth/facebook', (req, res) => {
    const authUrl = 'https://www.facebook.com/v3.2/dialog/oauth';
    const clientId = '2100952049991579';
    const clientSecret = '12396680c99e8669bbf915fbe71eec4b';
    const redirectUri = 'http://localhost:3000/auth/facebook';
    const responseType = 'code';
    const state = '123';
    console.log(req.query);
    if (!has(req.query, 'code')) {
      const query = qs.stringify({
        client_id: clientId,
        redirect_uri: redirectUri,
        response_type: responseType,
        state,
      });
      return res.redirect(`${authUrl}?${query}`);
    }
    return res.redirect('/login');
  });

  server.get('/auth/google', async (req, res) => {
    const authUrl = 'http://accounts.google.com/o/oauth2/auth';
    const tokenUrl = 'https://www.googleapis.com/oauth2/v4/token';
    const clientId = '136758333281-sl43ob96tu44qeemdkh0evu3miavgfs2.apps.googleusercontent.com';
    const clientSecret = 'YrhMIgGANcibbcZe210DlIGH';
    const redirectUri = 'http://localhost:3000/auth/google';
    const responseType = 'code';
    const scope = 'email profile';
    const accessType = 'offline';
    if (!has(req.query, 'code')) {
      const query = qs.stringify({
        client_id: clientId,
        redirect_uri: redirectUri,
        response_type: responseType,
        access_type: accessType,
        scope,
      });
      console.log(query);
      return res.redirect(`${authUrl}?${query}`);
    }
    console.log('google callback');
    console.log(req.query);
    const data = qs.stringify({
      code: req.query.code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    });
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    const result = await axios.post(`${tokenUrl}`, data, config);
    console.log(result);
    const now = new Date(Date.now());
    const expires = (result.data.expires || 1799) * 1000;
    res.cookie('access_token', result.data.access_token, {
      expires: new Date(now.getTime() + expires),
      httpOnly: true,
    });
    return res.redirect('/login');
  });

  server.get('*', (req, res) => handle(req, res));

  server.use((err, req, res, next) => {
    console.log('asdf');
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
