import { Router, Request, Response } from "express";

import {UserController} from "./controllers/UserController";

const router = Router();

router.post('/user', new UserController().handle)

export {router};