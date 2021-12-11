import express from 'express'
import userRouter from './resources/user/user.router.js'
import orderRouter from './resources/order/order.router.js'
import productRouter from './resources/product/product.router.js'
import cartRouter from './resources/cart/cart.router.js'
import { signup  , signin } from "../src/utils/auth.js"


import { db_connect } from './utils/db.js'

export const app = express()

 app.use(express.json())
app.use("/api/user" , userRouter)
app.use("/api/order" , orderRouter)
app.use("/api/cart" , cartRouter)
app.use("/api/product" , productRouter)

app.get("/" , (req,res) => {
    console.log("Get request to homepage received")
    res.status(200).json({ data: "connected to homepage comrade" })
})
app.post("/signup" , signup)
app.get("/signin" , signin)

export const ignite = async () =>{
    try{
    await db_connect();
    console.log("Succefully connected to database fam!")
    app.listen( process.env.PORT || 1000 , () => {
        console.log("App listening at port " + process.env.PORT )
    })
    }catch(e){
        console.error(e)
    }
}