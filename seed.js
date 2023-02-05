import { CourtModel, GameModel, dbClose } from './db.js'

await CourtModel.deleteMany()
console.log('Courts deleted')
await GameModel.deleteMany()
console.log('Games deleted')

const courts = [
    { name: 'Hoop St Court',  address: '123 Hoop St', city: 'Bondi', state: 'NSW', description: 'Sydney Court, hoop in good condition, no net' },
    { name: 'Gahan Reserve Half-Court', address: '118 Park St', city: 'Abbotsford', state: 'VIC', description: 'Half-court, chain net, right next to a train line' },
    { name: 'Prahran Park', address: '244-288 Malvern Rd', city: 'Prahran', state: 'VIC' },
    { name: 'Prince Alfred Court', address: 'Chalmers St', city: 'Surrey Hills', state: 'NSW' },
    { name: 'Beaufort St', address: 'Beaufort St', city: 'Perth', state: 'WA', description: 'Outdoor' },
    { name: 'Sabadeen Road', address: 'Sabadeen Rd', city: 'Alice Springs', state: 'NT' },
    { name: 'South Hobart Basketball Court', address: '42 Darcy St', city: 'South Hobart', state: 'TAS' },
    { name: 'Whitemore Square', address: '22-28 Whitemore Square', city: 'Adelaide', state: 'SA', decription: 'Half-court, no net' },
    { name: 'Griffith University Court', address: 'SE Fwy', city: 'Mansfield', state: 'QLD' },
    { name: 'Davies Park Basketball Court', address: '106B Victoria St', city: 'West End', state: 'QLD' },
    { name: 'Chris Gahan Reserve', address: 'Grattan St', city: 'Prahran', state: 'VIC' },
    { name: 'Carlton Gardens Basketball Court', address: '111 Carlton St', city: 'Carlton', state: 'VIC', description: 'Located behind the museum, regularly busy' }
]

await CourtModel.insertMany(courts)
console.log('Courts inserted')

const games = [
    { title: 'Anyones game!', address: '123 Hoop St', city: 'Bondi', state: 'NSW', time: '12:00', date: '2023-02-16', skillLevel: "Anyone's welcome", description: 'first game' },
    { title: 'Looking for 5s', address: '106B Victoria St', city: 'West End', state: 'QLD', time: '06:00', date: '2023-02-13', skillLevel: "Anyone's welcome", description: 'Hoop time' },
    { title: "Game", address: '22-28 Whitemore Square', city: 'Adelaide', state: 'SA', time: '18:00', date: '2023-02-22', skillLevel: 'Beginner', description: 'game' },
    { title: "Shootaround practice", address: '111 Carlton St', city: 'Carlton', state: 'VIC', time: '12:15', date: '2023-02-21', skillLevel: 'Intermediate', description: 'Just wanting to shootaround with some other hoopers' },
    { title: "Prahran classic", address: '244-288 Malvern Rd', city: 'Prahran', state: 'VIC', time: '16:00', date: '2023-02-28', skillLevel: 'Beginner', description: 'regulary scheduled game' },
    { title: "3v3 Pickup", address: '456 Basket St', city: 'Abbotsford', state: 'VIC', time: '18:00', date: '2023-02-20', skillLevel: 'Advanced', description: 'Only looking for really good hoopers' },
    { title: "Matt's Game", address: '111 Carlton St', city: 'Carlton', state: 'VIC', time: '09:30', date: '2023-02-15', skillLevel: "Anyone's welcome", description: 'what is basketball lol' },
    { title: 'Afternoon Delight', address: '54 Playground Ave', city: 'Surrey Hills', state: 'NSW', time: '14:00', date: '2023-02-17', skillLevel: 'Intermediate', description: 'Come play with us' },
    { title: 'Beginner Friendly', address: '33 Basketball Court', city: 'Brisbane', state: 'QLD', time: '08:00', date: '2023-02-14', skillLevel: 'Beginner', description: 'First timers welcome' },
    { title: "Midnight Run", address: '444 Night Court', city: 'Sydney', state: 'NSW', time: '23:00', date: '2023-02-12', skillLevel: 'Intermediate', description: 'Night hoopers unite' },
    { title: "Sunday Shootout", address: '244-288 Malvern Rd', city: 'Prahran', state: 'VIC', time: '10:30', date: '2023-02-13', skillLevel: 'Advanced', description: 'Serious hoopers only' },
    { title: "Charity Game", address: '666 Giving Blvd', city: 'Adelaide', state: 'SA', time: '13:00', date: '2023-02-19', skillLevel: "Anyone's Welcome", description: 'Playing for a cause' },
    { title: "Women's Game", address: '777 Lady Lane', city: 'Perth', state: 'WA', time: '15:00', date: '2023-02-18', skillLevel: 'Beginner', description: 'Ladies only hoop session' },
    { title: "Early Bird Special", address: '888 Sunrise Dr', city: 'Brisbane', state: 'QLD', time: '06:00', date: '2023-02-20', skillLevel: 'Advanced', description: 'Rise and shine hoopers' }
]

await GameModel.insertMany(games)
console.log('Games inserted')

dbClose()