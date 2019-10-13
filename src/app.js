import express from 'express';
import debugLib from 'debug';

import './config';

const debug = debugLib('ocv:server');

const port = '7000';
const host = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, host, async () => {
  debug(`Server listening on http://${host}:${port}`);
});
