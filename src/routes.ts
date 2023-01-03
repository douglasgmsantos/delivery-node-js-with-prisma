import { Router } from "express";

import { AuthenticateClientController } from './modules/authenticate/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/authenticate/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateCliente } from "./middlewares/ensureAuthenticateCliente";

const routes = Router()

const  createDeliverymanController =  new CreateDeliverymanController()
const  createClientController =  new CreateClientController()

const  authenticateClientController =  new AuthenticateClientController()
const  authenticateDeliverymanController =  new AuthenticateDeliverymanController()

const  createDeliveryController =  new CreateDeliveryController()

routes.post('/client/', createClientController.handle)
routes.post('/client/authenticate/', authenticateClientController.handle)

routes.post('/deliveryman/', createDeliverymanController.handle)
routes.post('/deliveryman/authenticate/', authenticateDeliverymanController.handle)

routes.post('/delivery/',ensureAuthenticateCliente, createDeliveryController.handle)


export { routes }