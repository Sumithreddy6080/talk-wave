// import Chats from "./data/data.js"
const express = require("express");
const { chats } = require("./data/data");
const dotenv =require("dotenv");
const connectDB = require("./CONFIG/db");
const color = require("colors")
const userRoutes = require("./routes/userRoutes")
dotenv.config();
connectDB();
const app = express();

app.get('/',(req,res)=>{
    res.send("api is Running");
});

app.get("/api/chats",(req,res)=>{
    res.send(chats)
})


// app.use("/api/user",userRoutes)


const PORT = process.env.PORT || 5000;


app.listen(PORT,console.log(`server started on port ${PORT}`.blue.bold));











// app.get('/api/chat',(req,res)=>{
//     console.log("hi")
//     res.send(chats)
// })
// app.get("/api/chat/:id",(req,res)=>{
//         const singleChat = chats.find((c)=> c._id ===req.params.id);
//         res.send(singleChat);
// })