import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
    {
            title: {
                type: String,
                required: true,
                unique: true
            },
            desc: {
                type: String,
                required: true
            },
            img: {
                type: String,
                required: true
            },
            size: String,
            categories: Array,
            color: String,
            price: {
                type: Number,
                required: true
            }
            
    },

)

export const Product = mongoose.model("product" , ProductSchema)