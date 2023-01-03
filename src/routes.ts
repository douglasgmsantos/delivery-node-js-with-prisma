import { Router } from "express";

import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";

import { AuthenticateClientController } from './modules/authenticate/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/authenticate/authenticateDeliveryman/AuthenticateDeliverymanController';

import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDeliveryUseCase/CreateDeliveryController";

import { FindAllWithoutEndDateController } from "./modules/deliveries/useCases/findAllWithoutEndDateUseCase/FindAllWithoutEndDateController";

const routes = Router()

const  createDeliverymanController =  new CreateDeliverymanController()
const  createClientController =  new CreateClientController()

const  authenticateClientController =  new AuthenticateClientController()
const  authenticateDeliverymanController =  new AuthenticateDeliverymanController()

const  createDeliveryController =  new CreateDeliveryController()
const  findAllWithouEndDateController =  new FindAllWithoutEndDateController()

routes.post('/client/', createClientController.handle)
routes.post('/client/authenticate/', authenticateClientController.handle)

routes.post('/deliveryman/', createDeliverymanController.handle)
routes.post('/deliveryman/authenticate/', authenticateDeliverymanController.handle)

routes.post('/delivery/', ensureAuthenticateClient, createDeliveryController.handle)
routes.get('/delivery/avaliable', ensureAuthenticateDeliveryman, findAllWithouEndDateController.handle)


export { routes }