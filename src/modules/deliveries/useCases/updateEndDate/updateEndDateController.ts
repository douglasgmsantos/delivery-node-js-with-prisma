import { Request, Response } from 'express';
import { UpdateEndDateUseCase } from './updateEndDateUseCase';

export class UpdateEndDateController {

    async handle (request: Request, response: Response) {
        const { id_deliveryman } = request
        const { id: id_delivery } = request.params

        const updateEndDateUseCase = new UpdateEndDateUseCase()
        const delivery = await updateEndDateUseCase.exec({ id_delivery, id_deliveryman })

        return response.json(delivery)
    }

}