import { hash } from 'bcrypt'
import { prisma } from "../../../../database/prismaClient"

interface ICreateDeliveryman {
    username: string
    password: string
}

export class CreateDeliverymanUseCase {

    async exec({ username, password }: ICreateDeliveryman) {
        const clientExist = await prisma.deliveryman.findFirst({ 
            where: {
                username: {
                    mode: 'insensitive'
                }
            }
        })
        
        if(clientExist)
            throw new Error('Deliveryman already exists')

        const hashPassword = await hash(password, 10)
        const client = await prisma.deliveryman.create({
            data: {
                username,
                passowrd: hashPassword
            }
        })
        
        return client
    }

}