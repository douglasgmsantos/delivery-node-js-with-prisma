import { Request, Response } from 'express';
import { AuthenticateClientUseCase } from './AuthenticateClientUseCase';


export class AuthenticateClientController {
    
    async handle(req: Request, resp: Response){
        const { username, password } = req.body
        const authenticateClientUseCase =  new AuthenticateClientUseCase();
        const result = await authenticateClientUseCase.exec({ username, password })

        resp.json(result)
    }

}