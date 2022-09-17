import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

const app = express()
dotenv.config()

// Constants
const port = process.env.PORT || 3001
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME

// Middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    return res.json({message: "All is fine!"})
}) 

async function start() {
    try {
        await mongoose.connect (
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.5rhohrz.mongodb.net/${dbName}?retryWrites=true&w=majority`
            // 'mongodb+srv://oxana:OT1234@cluster0.5rhohrz.mongodb.net/blog?retryWrites=true&w=majority'

        )
        app.listen(port, () => {
            console.log(`Server started on port: ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()