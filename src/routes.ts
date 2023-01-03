import { Router } from "express";

import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";

import { AuthenticateClientController } from './modules/authenticate/useCases/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/authenticate/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDeliveryUseCase/CreateDeliveryController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { FindAllAvaliableController } from "./modules/deliveries/useCases/findAllAvaliableUseCase/FindAllAvaliableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliverymanUseCase/UpdateDeliverymanController";

const routes = Router()

const  createDeliverymanController =  new CreateDeliverymanController()
const  createClientController =  new CreateClientController()
const  findAllDeliveriesController =  new FindAllDeliveriesController()

const  authenticateClientController =  new AuthenticateClientController()
const  authenticateDeliverymanController =  new AuthenticateDeliverymanController()

const  createDeliveryController =  new CreateDeliveryController()
const  findAllAvaliableController =  new FindAllAvaliableController()

const updateDeliverymanController = new UpdateDeliverymanController()

routes.post('/client/', createClientController.handle)
routes.post('/client/authenticate/', authenticateClientController.handle)
routes.get('/client/deliveries/', ensureAuthenticateClient, findAllDeliveriesController.handle)

routes.post('/deliveryman/', createDeliverymanController.handle)
routes.post('/deliveryman/authenticate/', authenticateDeliverymanController.handle)

routes.post('/delivery/', ensureAuthenticateClient, createDeliveryController.handle)
routes.get('/delivery/avaliable', ensureAuthenticateDeliveryman, findAllAvaliableController.handle)
routes.put('/delivery/updateDeliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle)


export { routes }