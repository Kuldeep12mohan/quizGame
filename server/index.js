import express from "express";
import dotenv from "dotenv"
dotenv.config({
  path:"./.env"
})
const app = express();

app.get("/",(req,res)=>{
  res.send("hello")
})

app.listen(process.env.PORT,()=>{
  console.log(`server is running on port ${process.env.PORT}`)
})
