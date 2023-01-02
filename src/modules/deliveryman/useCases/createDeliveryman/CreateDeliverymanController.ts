import { Request, Response } from 'express';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';


export class CreateDeliverymanController {
    
    async handle(req: Request, resp: Response){
        const { username, password } = req.body
        const createClientUseCase =  new CreateDeliverymanUseCase();
        const result = await createClientUseCase.exec({ username, password })

        resp.json(result)
    }

}