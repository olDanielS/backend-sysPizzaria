import { Request, Response } from "express";

import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController{
    async handle(req: Request, res: Response){
        const {name, price, description, category_id} = req.body;

        if(!req.file){
            throw new Error("error upload file")
        }

        const {originalname, filename} = req.file;

        console.log(filename);

        const product = await new CreateProductService().execute({name, price, description, banner: filename, category_id})
        
        return res.json(product);

    }
}

export {CreateProductController};