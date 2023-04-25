import { Request, Response } from "express";

import { CreateUserService } from "../../services/CreateUserService";

class CreateUserController{
    async handle(req:Request, res:Response){

        const {name, email, password} = req.body;

        const userService = new CreateUserService();

        const exec = await userService.execute({name,email,password});

        return res.json(exec);

    }
}

export {CreateUserController};