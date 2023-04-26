import { Router, Request, Response } from "express";

import {CreateUserController} from "./controllers/CreateUserController";
import { AuthUserController } from "./controllers/AuthUserController";
import { DetailsUserController } from "./controllers/DetailsUserController";

import { isAuthenticated } from "./Middlewares/isAuthenticated";

const router = Router();

router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.post('/me', isAuthenticated, new DetailsUserController().handle)


export {router};