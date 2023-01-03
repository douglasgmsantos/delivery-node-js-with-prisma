import { prisma } from "../../../../database/prismaClient"

interface IFindAllDeliveriesDelivermanUseCase {
    id_deliveryman: string
}

export class FindAllDeliveriesDelivermanUseCase {

    async exec({ id_deliveryman }: IFindAllDeliveriesDelivermanUseCase) {
        return await prisma.deliveryman.findMany({ 
            where: {
                id: id_deliveryman
            },
            select: {
                passowrd: false,
                id: true,
                username: true,
                deliveries: true
            }            
        })
    }
    
}