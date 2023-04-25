import { hash } from "bcrypt"

import prismaClient from "../../prisma"

interface UserInfo {
    name: string,
    email: string,
    password: string
}

class CreateUserService{
    async execute({name,email,password}:UserInfo){
        
        if(!email){
            throw new Error('Email or password incorrect')
        }

        const emailAlreadyExist = await prismaClient.users.findFirst({where: {
            email: email
        }})

        if(emailAlreadyExist){
            throw new Error("Email already exist!")
        }

        const passHash = await hash(password, 8); 

        const user = await prismaClient.users.create({
            data: {
                name,
                email,
                password: passHash
            },select:{
                id: true,
                name: true,
                email: true

            }
        })
        return user;


    }
}

export { CreateUserService };