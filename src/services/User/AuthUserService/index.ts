import prismaClient from "../../../prisma"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"


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
       
       if(!ComparePass){
            throw new Error("Email/password incorrect")
       }
       
       const token = sign({  //Gerando token para o usuario | Precisamos passar os dados do user, a senha secreta e alguns dados opcionais
        email: user.email,
        name: user.name
    },    
        process.env.JWT_SECRET, 
    {
        subject: user.id,
        expiresIn: '30d'
    })
       
       return {
        id: user.id,
        name: user.name,
        email: user.email,
        token: token
       }
        

    }
}

export {AuthUserService}