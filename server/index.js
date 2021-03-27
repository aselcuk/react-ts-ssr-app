import express from 'express';
import cors from 'cors';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import App from '../src/App';
import { routes } from '../src/routes';

const app = express()

app.use(cors())
app.use(express.static('build'))

app.get('*', async (req, res) => {

  const activeRoute = routes && routes.find((route) => matchPath(req.url, route));
  let initalData;

  if (activeRoute && activeRoute.fetchInitialData) {
    const fetchedInitialData = await activeRoute.fetchInitialData(req.path);

    initalData = fetchedInitialData;
  }

  const markup = ReactDOM.renderToString(
    <StaticRouter location={req.url} context={{ initalData }}>
      <App />
    </StaticRouter>
  )

  const html = `
    <!DOCTYPE html>
    <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React & TypeScript Peoject App</title>
        <link href="/main.css" rel="stylesheet">
        <script defer src="/client.js"></script>
        <script>window.__INITIAL_DATA__ = ${serialize(initalData)}</script>
      </head>

      <body>
        <div id="root">${markup}</div>
      </body>

    </html>
  `;

  res.send(html);

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})