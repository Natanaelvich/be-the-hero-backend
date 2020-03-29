import express from 'express';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate';

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);
server.use(errors());

server.listen(3333, () => {
  console.log('port 3333');
});
