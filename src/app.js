import express from 'express';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate';
import 'cross-env';

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);
server.use(errors());

export default server;
