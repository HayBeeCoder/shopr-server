import controllers from './order.controller.js'
import { Router } from 'express';

const router = Router()

router
    .route('/')
    .get((req, res) => {

        console.log("Get request to order successful")
    }
    )

export default router