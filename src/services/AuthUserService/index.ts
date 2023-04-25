import prismaClient from "../../prisma"
import { compare } from "bcrypt"

interface UserInfos {
    email: string,
    password: string
}

class AuthUserService{
    async execute({email, password}: UserInfos){
        if(!email || !password){
            throw new Error("Email/password incorrect")
        }

        const user = await prismaClient.users.findFirst({where: {
            email
        }})

        if(!user){
            throw new Error("User Not found!")
        }

       const ComparePass = compare(password, user.password)
       
       return ComparePass
        

    }
}

export {AuthUserService}