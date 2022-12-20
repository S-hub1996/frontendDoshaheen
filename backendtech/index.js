// const mongoose = require("mongoose")
const express = require("express")
const authRouter = require("./auth")
const userRouter = require("./user")
const connection = require("./db")
const cors = require("cors")


const app  = express()

const CLIENT_ID = "b89bb8171b892ae0a7db";
const CLIENT_SECRET = "0b0a377feafbca3e42be8a461fa408029bbaba8a"

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000"]
}))

app.use("/static", express.static("./uploads"))

app.use("/auth", authRouter)
app.use("/profile", userRouter)

app.get("/",(req,res)=>{
    return res.sendFile(__dirname + "/index.html")
})

app.get("/instagram/callback",(req,res)=>{
    const requestToken = req.query.code;

    console.log("Token is:", requestToken);
    return res.send("Login success")
})

app.listen(8080, async()=>{
    await connection;
    console.log("connected to db");
    console.log("server started on http://localhost:8080");
})

