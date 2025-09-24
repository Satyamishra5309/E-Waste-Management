import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connection.js";


dotenv.config({
    path:'./env'
});




const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb"}));
app.use(express.urlencoded({extended:true}));
app.use((err, req, res, next) =>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success:false,
        status,
        message,
    })
})


//default get
app.get("/",(req,res) => {
    res.send("API is runnig.....");
})

// connectDB()
// .then(
//     () => {
//         app.listen(process.env.PORT || 8000, () => {
//             console.log(`Server is running at port :${process.env.PORT}`)
//         })
//     }
// ).catch((err) => {
//     console.log("Mongodb connnection failed", err)
// })



//function to start the server
const startServer = async () => {
    try{
        connectDB();
        app.on("error", (error) => {
            console.log("The application is unable to talk to databse ERROR: ", error)
            throw error
        })
        app.listen(6666, () => console.log("Server started on port 6666"))
    }catch(error){
        console.log("Error starting server", error)
    }
}

startServer();