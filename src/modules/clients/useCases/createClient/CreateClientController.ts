import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';


export class CreateClientController {
    
    async handle(req: Request, resp: Response){
        const { username, password } = req.body
        const createClientUseCase =  new CreateClientUseCase();
        const result = await createClientUseCase.exec({ username, password })

        resp.json(result)
    }

}