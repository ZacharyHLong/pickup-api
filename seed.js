import { StateModel, CourtModel, GameModel, dbClose } from './db.js'

await StateModel.deleteMany()
console.log('States deleted')
await CourtModel.deleteMany()
console.log('Courts deleted')

const states = [
    { name: 'ACT' },
    { name: 'NSW' },
    { name: 'NT' },
    { name: 'QLD' },
    { name: 'SA' },
    { name: 'TAS' },
    { name: 'VIC' },
    { name: 'WA' }
]

const sta = await StateModel.insertMany(states)
console.log('States inserted')

const courts = [
    { address: '123 Hoop St', city: 'Bondi', state: sta[1], description: 'Sydney Court, hoop in good condition, no net' },
    { address: '456 Basket St', city: 'Abbotsford', state: sta[6], description: 'asphalt, backboard broken' }
]

await CourtModel.insertMany(courts)
console.log('Courts inserted')

const games = [
    { address: '123 Hoop St', state: sta[1], time: '12:00', date: '2021-01-01', skillLevel: 'beginner', description: 'first game' },
    { address: '456 Basket St', state: sta[6], time: '18:00', date: '2021-04-01', skillLevel: 'highly-skilled', description: 'regular scheduled game' }
]

await GameModel.insertMany(games)
console.log('Games inserted')

dbClose()