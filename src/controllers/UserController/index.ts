import { Request, Response } from "express";

import { UserService } from "../../services/userService";

class UserController{
    async handle(req:Request, res:Response){

        const {name, email, password} = req.body;

        const userService = new UserService();

        const exec = await userService.execute({name,email,password});

        return res.json(exec);

    }
}

export {UserController};