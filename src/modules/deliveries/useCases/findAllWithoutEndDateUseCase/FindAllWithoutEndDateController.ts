import { Request, Response } from 'express';
import { FindAllWithoutEndDateUseCase } from './FindAllWithoutEndDateUseCase';


export class FindAllWithoutEndDateController {
    
    async handle(_: Request, resp: Response){
        const findAllWithoutEndDateUseCase =  new FindAllWithoutEndDateUseCase();
        const deliveries = await findAllWithoutEndDateUseCase.exec()

        return resp.json(deliveries)
    }

}