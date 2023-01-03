import { Request, Response } from 'express';
import { FindAllDeliveriesDelivermanUseCase } from './FindAllDeliveriesDelivermanUseCase';


export class FindAllDeliveriesDelivermanController {
    
    async handle(req: Request, resp: Response){
        const { id_deliveryman } = req
        const findAllDeliveriesUseCase =  new FindAllDeliveriesDelivermanUseCase();
        const deliveries = await findAllDeliveriesUseCase.exec({ id_deliveryman })
        resp.json(deliveries)
    }

}