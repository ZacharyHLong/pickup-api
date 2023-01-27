import express from 'express' 

const app = express()
const port = 4001

app.get('/', (req, res) => res.send('<h2>Home Route<h2>'))

app.get('/games', (req, res) => res.status(200).send('<h2>Games Route<h2>'))

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))

