import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';

import path from 'path';

import cors from 'cors';

import {router} from './routes';

const app = express();

app.use(express.json());  //Default responses from type json
app.use(router); //default routes
app.use(cors()); //enable cors for permission for whatever ips

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))  //Static routes for images
)

//midleware de error, todas as rotas vão passar aqui e se houver algum erro esse middleware vai mostrar
app.use((err: Error, req: Request, res: Response, next:NextFunction) => {
    if(err instanceof Error){
        //Se for uma instancia do tipo error 
        return res.status(400).json({
            error: err.message
        })
    }
    res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})



app.listen(3333, () => {
    console.log('Server running...')
})