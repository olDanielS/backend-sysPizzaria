import prismaClient from "../../../prisma"

interface ProductInfo {
    name: string,
    price: string,
    description: string,
    banner: string,
    category_id: string
}

class CreateProductService {
    async execute({name, price, description, banner, category_id}: ProductInfo) {

        if(!name || !price || !description || !category_id ){
            throw new Error("Arguments not found")
        }

        const createProduct = prismaClient.products.create({
            data: {
                name, 
                price, 
                description, 
                banner, 
                category_id
            }
        })


        return createProduct;
    }
}

export { CreateProductService };