import controllers from './product.controller.js'
import { Router } from 'express';

const router = Router()

router
    .route('/')
    .get((req, res) => {

        console.log("Get request to product successful")
    }  
)
export default router