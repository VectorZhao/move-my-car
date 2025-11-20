import app from './app.js';
import { config } from './config/index.js';

const { port } = config;

app.listen(port, () => {
  console.log(`🚗 Move My Car API running on port ${port}`);
});
