import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n Databse connected !! DB Host : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection Failed", error);
        process.exit(1);
    }
}

export default connectDB




// //function to connect to mongodb
// const connectDB = () => {
//     mongoose.set("strictQuery", true)
//     mongoose.connect(process.env.MONGODB_URL)
//     .then(() => console.log("MongoDB Connected"))
//     .catch((err) => {
//         console.error("Failed to connect to DB")
//         console.log(err);
//     })
// }