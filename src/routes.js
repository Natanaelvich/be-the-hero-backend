import { Router } from 'express';
import OngController from './controllers/OngController';
import IncidentsController from './controllers/IncidentsController';

const routes = Router();

routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

routes.post('/ongs/incidents', IncidentsController.store);
routes.get('/ongs/incidents', IncidentsController.index);

export default routes;
