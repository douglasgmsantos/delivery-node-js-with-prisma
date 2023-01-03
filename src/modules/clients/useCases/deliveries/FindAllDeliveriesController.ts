import { Request, Response } from 'express';
import { FindAllDeliveriesUseCase } from './FindAllDeliveriesUseCase';


export class FindAllDeliveriesController {
    
    async handle(req: Request, resp: Response){
        const { id_client } = req
        const findAllDeliveriesUseCase =  new FindAllDeliveriesUseCase();
        const deliveries = await findAllDeliveriesUseCase.exec({ id_client })
        resp.json(deliveries)
    }

}