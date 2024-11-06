import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"

const connectDB = async ()=>{
    try {
        const ConnectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST ${ConnectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDb connection FAILED", error)
        process.exit(1)   // Just Inbuilt process of nodeJS
    }
}

export default connectDB
