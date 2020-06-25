const express = require('./node_modules/express')
const bodyParser = require('./node_modules/body-parser')
const cors = require('./node_modules/cors/lib')

const db = require('./db')
const thoughtRouter = require('./routes/thoughtRouter')
const imagesRouter = require('./routes/imagesRouter')

const seedDB = require('./data/db/seeds')

const { createImages } = require('./controllers/imageCtrl')

const app = express()
const apiPort = 3000;

createImages()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api', thoughtRouter)
app.use('/api', imagesRouter)



app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

