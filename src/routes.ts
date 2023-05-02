import { Router, Request, Response } from "express";

import {CreateUserController} from "./controllers/CreateUserController";
import { AuthUserController } from "./controllers/AuthUserController";
import { DetailsUserController } from "./controllers/DetailsUserController";

import { isAuthenticated } from "./Middlewares/isAuthenticated";

import { CreateCategoryControler } from "./controllers/CreateCategoryControler";
import { ListCategoryController } from "./controllers/ListCategoryController";

import { CreateProductController } from "./controllers/CreateProductController";


const router = Router();

// ---- User
router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.post('/me', isAuthenticated, new DetailsUserController().handle)


router.post('/me', isAuthenticated, new DetailsUserController().handle)

// ---- Caterorys
router.post('/category', isAuthenticated, new CreateCategoryControler().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)


// ---- Products
router.post('/product', isAuthenticated, new CreateProductController().handle)



export {router};