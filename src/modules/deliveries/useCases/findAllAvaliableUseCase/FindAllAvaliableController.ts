import { Request, Response } from 'express';
import { FindAllAvaliableUseCase } from './FindAllAvaliableUseCase';


export class FindAllAvaliableController {
    
    async handle(_: Request, resp: Response){
        const findAllWithoutEndDateUseCase =  new FindAllAvaliableUseCase();
        const deliveries = await findAllWithoutEndDateUseCase.exec()

        return resp.json(deliveries)
    }

}