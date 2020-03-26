import { Router } from 'express';

import OngController from './controllers/OngController';

const routes = new Router();

routes.get('/', OngController.index);

export default routes;
