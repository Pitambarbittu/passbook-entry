const express = require("express");
const mongoose  = require("mongoose");
const cors  = require("cors")
const dotenv = require("dotenv");
const bodyparser = require("body-parser")

const passbookRoutes = require("./routes/passbookRoutes")


dotenv.config()
const app = express()

//databse
mongoose.connect(process.env.MONGODB_URI )
.then(()=>console.log("connected to the databse"))
.catch((err)=>console.error("mongodb connection error", err))

app.use(cors())
app.use(bodyparser.json())

app.use("/api/v1", passbookRoutes);



app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is running ${process.env.PORT || 3000}`)
})