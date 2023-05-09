import { Router} from "express";
import multer from 'multer';

import {CreateUserController} from "./controllers/CreateUserController";
import { AuthUserController } from "./controllers/AuthUserController";
import { DetailsUserController } from "./controllers/DetailsUserController";

import { isAuthenticated } from "./Middlewares/isAuthenticated";

import { CreateCategoryControler } from "./controllers/CreateCategoryControler";
import { ListCategoryController } from "./controllers/ListCategoryController";

import { CreateProductController } from "./controllers/CreateProductController";

import uploadConfig from "./Config/multer";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

// ---- User
router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.post('/me', isAuthenticated, new DetailsUserController().handle)


router.post('/me', isAuthenticated, new DetailsUserController().handle)

// ---- Caterorys
router.post('/category', isAuthenticated, new CreateCategoryControler().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)


// ---- Products
router.post('/product', isAuthenticated, upload.single("file"), new CreateProductController().handle)



export {router};