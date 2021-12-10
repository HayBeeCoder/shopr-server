import controllers from './product.controller.js'
import { Router } from 'express';

const router = Router()

router
    .route('/')
    .get((req, res) => {
        res.status(200).json({ product: "Successful connection to product in database" })
        console.log("Get request to product successful")
    }
    )
export default router