import controllers from './user.controller.js'
import { Router } from 'express';

const router = Router()

router
    .route('/')
    .get((req, res) => {

        console.log("Get request to user successful")
    }
    )
export default router