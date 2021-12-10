import controllers from './user.controller.js'
import { Router } from 'express';

const router = Router()

router
    .route('/')
    .get((req, res) => {
        res.status(200).json({user: "Successful connection to user in database"})
        console.log("Get request to user successful")
   
    }
    )
export default router