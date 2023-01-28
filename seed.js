import { StateModel, CourtModel, dbClose } from './db.js'

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
    { address: '456 Basket St', city: 'Abbotsford', state: sta[6], description: 'asphalt, backboard broken' },
]

await CourtModel.insertMany(courts)
console.log('Courts inserted')

dbClose()