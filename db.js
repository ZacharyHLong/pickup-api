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



////////////////////////////////////////////////////////////////
// Court Schema
const courtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    description: { type: String, required: false }
})

// Court Model
const CourtModel = mongoose.model('Court', courtSchema)

// Game schema (double check date type, and potentially ref courts [would mean courts must be registered first])
const gameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: Date, required: true },
    skillLevel: { type: String, required: true },
    description: { type: String, required: false },
    participants: { type: Number, required: false, default: 0 }
})

// Game Model
const GameModel = mongoose.model('Game', gameSchema)



export { CourtModel, GameModel, dbClose }