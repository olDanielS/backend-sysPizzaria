import prismaClient from "../../../prisma";

interface ProductRequest{
    category_id: string
}


class ListByCategoryService {
    async execute({category_id}:ProductRequest){
    
        const consult = await prismaClient.products.findMany({where: {
            category_id: category_id
        }})

        return consult;

    }
}

export {ListByCategoryService};