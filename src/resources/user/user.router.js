import controllers from './user.controller.js'
import { Router } from 'express';

const router = Router()

router
    .route("/userposttest")
    .post( (req,res) => {
    res.json({ username : req.body.username})
})
router
    .route('/')
    .get((req, res) => {
        res.status(200).json({user: "Successful connection to user in database"})
        console.log("Get request to user successful")
   
    }
    )
export default router