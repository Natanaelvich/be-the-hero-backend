import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import OngController from './controllers/OngController';
import IncidentsController from './controllers/IncidentsController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';

const routes = Router();

routes.post('/session', SessionController.store);

routes.get('/ongs', OngController.index);
routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2),
    }),
  }),
  OngController.store
);

routes.get(
  '/ongs/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentsController.index
);

routes.post('/ongs/incidents', IncidentsController.store);
routes.delete(
  '/ongs/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentsController.destroy
);

routes.get(
  '/ongs/profile/incidents',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      ong_id: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
);

export default routes;
