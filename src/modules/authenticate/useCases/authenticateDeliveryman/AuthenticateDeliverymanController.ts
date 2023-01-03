import { Request, Response } from 'express';
import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase';


export class AuthenticateDeliverymanController {
    
    async handle(req: Request, resp: Response){
        const { username, password } = req.body
        const authenticateDeliverymanUseCase =  new AuthenticateDeliverymanUseCase();
        const result = await authenticateDeliverymanUseCase.exec({ username, password })

        resp.json(result)
    }

}