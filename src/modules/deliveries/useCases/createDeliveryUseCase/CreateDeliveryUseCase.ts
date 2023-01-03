import { prisma } from "../../../../database/prismaClient"

interface ICreateDelivery {
    id_client: string
    item_name: string
}

export class CreateDeliveryUseCase {

    async exec({ id_client, item_name }: ICreateDelivery) {
        return prisma.deliveries.create({
            data : {
                item_name,
                id_client
            }
        })
    }

}