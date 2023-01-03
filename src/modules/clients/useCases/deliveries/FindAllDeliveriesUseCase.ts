import { hash } from 'bcrypt'
import { prisma } from "../../../../database/prismaClient"

interface ICreateClient {
    id_client: string
}

export class FindAllDeliveriesUseCase {

    async exec({ id_client }: ICreateClient) {
        return await prisma.clients.findMany({ 
            where: {
                id: id_client
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