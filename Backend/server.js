import express from "express";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app=express();
dotenv.config(); 
const PORT=process.env.PORT || 5000;
app.use(express.json())
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
app.get("/",(req,res)=>{
    res.send("Hello Bro!");
})

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is Started at port ${PORT}`);
})