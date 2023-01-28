import mongoose from 'mongoose'
import dotenv from'dotenv'
dotenv.config()

mongoose.set('strictQuery', true)

async function dbClose() {
    await mongoose.connection.close()
    console.log('Connection closed')
}

try {
    const db = await mongoose.connect(process.env.MONGO_URL)
    console.log(db.connection.readyState === 1 ? 'Connected to DB' : 'Not connected to DB')
}
catch (err) {
    console.log(err)
}

