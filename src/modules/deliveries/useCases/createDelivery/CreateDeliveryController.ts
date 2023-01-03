import { Request, Response } from 'express';
import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';


export class CreateDeliveryController {
    
    async handle(req: Request, resp: Response){
        const { id_client, item_name } = req.body
        const createClientUseCase =  new CreateDeliveryUseCase();
        const result = await createClientUseCase.exec({ id_client, item_name })

        return resp.json(result)
    }

}