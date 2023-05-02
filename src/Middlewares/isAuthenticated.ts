import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface Payload {
    sub: string
}

export function isAuthenticated(req:Request,res:Response,next:NextFunction){
    const AuthToken = req.headers.authorization;

    if(!AuthToken){
        return res.status(401).end();
    }

    const [, token] = AuthToken.split(" ");

    try{
        const {sub} = verify(token, process.env.JWT_SECRET) as Payload;
        console.log(sub)

        req.user_id = sub

        return next();
    }catch(err){
        return res.status(401).end();
    }

}