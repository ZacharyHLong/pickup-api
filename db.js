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
// State schema
const stateSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

// State Model
const StateModel = mongoose.model('State', stateSchema)

// Court Schema
const courtSchema = new mongoose.Schema({
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: mongoose.ObjectId, ref: 'State' },
    description: { type: String, required: false }
})

// Court Model
const CourtModel = mongoose.model('Court', courtSchema)

// Game schema (double check date type, and potentially ref courts [would mean courts must be registered first])
const gameSchema = new mongoose.Schema({
    address: { type: String, required: true },
    state: { type: mongoose.ObjectId, ref: 'State' },
    time: { type: String, required: true },
    date: { type: Date, required: true },
    skillLevel: { type: String, required: true },
    description: { type: String, required: false }
})

// Game Model
const GameModel = mongoose.model('Game', gameSchema)






export { StateModel, CourtModel, GameModel, dbClose }