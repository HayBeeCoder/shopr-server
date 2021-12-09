import  mongoose  from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

export const db_connect = ( url = process.env.DB_URL, opts= {}) => {
    return mongoose.connect(
        url,
        { ...opts , useNewUrlParser: true}
    )
}