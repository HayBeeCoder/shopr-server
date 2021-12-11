import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique : true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    },

)


UserSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
      return next()
    }
  
    bcryptjs.hash(this.password, 8, (err, hash) => {
      if (err) {
        return next(err)
      }
  
      this.password = hash
      next()
    })
  })
  


  UserSchema.methods.checkPassword = function(password) {
    const passwordHash = this.password
    return new Promise((resolve, reject) => {
      bcryptjs.compare(password, passwordHash, (err, same) => {
        if (err) {
          return reject(err)
        }
  
        resolve(same)
      })
    })
  }
  

export const User = mongoose.model("user" , UserSchema)