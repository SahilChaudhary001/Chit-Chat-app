import express from 'express';
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { server ,app } from './socket/socket.js';
// import cors from "cors";

dotenv.config(); 
const PORT=process.env.PORT;
app.use(express.json())
app.use(cookieParser());
// app.use(cors());
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);
app.get("/",(req,res)=>{
    res.send("Hello Bro!");
})

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is Started at port ${PORT}`);
})