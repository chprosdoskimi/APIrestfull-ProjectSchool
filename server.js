require('dotenv').config();

import app from './app';

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`);
});
