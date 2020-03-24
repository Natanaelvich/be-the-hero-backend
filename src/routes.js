import { Router } from 'express';
import OngController from './controllers/OngController';
import IncidentsController from './controllers/IncidentsController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';

const routes = Router();

routes.post('/session', SessionController.store);

routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

routes.get('/ongs/incidents', IncidentsController.index);
routes.post('/ongs/incidents', IncidentsController.store);
routes.delete('/ongs/incidents/:id', IncidentsController.destroy);

routes.get('/ongs/profile/incidents', ProfileController.index);

export default routes;
