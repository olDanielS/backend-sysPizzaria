import { Request, Response } from "express";

import { AuthUserService } from "../../services/AuthUserService";

class AuthUserController{
    async handle(req:Request, res:Response){

        const {email, password} = req.body;

        const userService = new AuthUserService();

        const exec = await userService.execute({email,password});

        return res.json(exec);

    }
}

export {AuthUserController};