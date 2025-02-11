import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import router from "./routes/api.js"
import { PORT } from "./config/config.js";


const app = express();
app.use("/api",router);

app.listen(PORT,()=>{
    console.log(`App is running on the port ${PORT}`)
})