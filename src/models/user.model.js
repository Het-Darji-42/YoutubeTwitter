import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        watchHistory:[
            {
                type : Schema.Types.ObjectID ,
                ref : "Video"
            }
        ],

        userName : {
            type : String,
            required : true ,
            unique : true,
            lowercase : true , 
            trim : true, 
            index : true 
        },

        email : {
            type : String,
            required : true ,
            unique : true,
            lowercase : true , 
            trim : true, 
        },

        fullName : {
            type : String,
            required : true , 
            trim : true, 
            index : true
        },

        avatar : {
            type : String, //Cloudinary url
            required : true,
        },

        coverImage:{
            type : String, //Cloudinary url
        },
        
        password:{
            type : String,
            required:[true , 'Password Is Require']
        },

        refreshToken:{
            type:String
        }

    } ,{timestamps : true})

export const User = mongoose.model("User" , userSchema)