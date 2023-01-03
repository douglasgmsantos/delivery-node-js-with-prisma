import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { prisma } from '../../../../database/prismaClient'


interface IAuthenticateDelivery {
    username: string
    password: string
}

export class AuthenticateDeliverymanUseCase {

    async exec({ username, password }: IAuthenticateDelivery) {
        const client = await prisma.deliveryman.findFirst({ 
            where: {
                username
            }
        })

        if(!client)
            throw new Error('Username or password invalid!')

        const passwordMatch = await compare(password, client.passowrd)
        if(!passwordMatch)
            throw new Error('Username or password invalid!')

        const token = sign({ username }, "7108537956afa2a526f96cc9da7b0c36", {
            subject: client.id,
            expiresIn: '1d'
        } )
       
        
        return {
            token
        }
    }

}