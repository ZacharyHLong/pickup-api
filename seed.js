import { CourtModel, GameModel, dbClose } from './db.js'

await StateModel.deleteMany()
console.log('States deleted')
await CourtModel.deleteMany()
console.log('Courts deleted')
await GameModel.deleteMany()
console.log('Games deleted')

const courts = [
    { name: 'Hoop St Court',  address: '123 Hoop St', city: 'Bondi', state: 'NSW', description: 'Sydney Court, hoop in good condition, no net' },
    { name: 'Quentins court', address: '456 Basket St', city: 'Abbotsford', state: 'VIC', description: 'asphalt, backboard broken' },
    { name: 'Sportscenter Court', address: '23 City St', city: 'Hobart', state: 'TAS' }
]

await CourtModel.insertMany(courts)
console.log('Courts inserted')

const games = [
    { title: 'Anyones game!', address: '123 Hoop St', city: 'Bondi', state: 'NSW', time: '12:00', date: '2021-01-01', skillLevel: "Anyone's welcome", description: 'first game' },
    { title: "Matt's Game", address: '456 Basket St', city: 'Abbotsford', state: 'VIC', time: '18:00', date: '2021-04-01', skillLevel: 'Intermediate', description: 'regular scheduled game' }
]

await GameModel.insertMany(games)
console.log('Games inserted')

dbClose()