import { prisma } from "../../../../database/prismaClient"


export class FindAllAvaliableUseCase {

    async exec() {
        return await prisma.deliveries.findMany({
            where: {
                end_at: null,
                id_deliveryman: null
            }
        })
    }
}