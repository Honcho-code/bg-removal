import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoute.js'

// App Config

const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// Initialize middlewares
app.use(express.json())
app.use(cors())

// Api routes
app.get('/', (req,res)=>res.send("Api Working"))
app.use("/api/user", userRouter)

app.listen(PORT, ()=>console.log("Server Running on port" + PORT))