const express = require('express')
const app = express()
const { expressjwt: jwt } = require('express-jwt')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors  = require('cors')
require('dotenv').config()


mongoose.set('strictQuery', false)

app.use(express.json())
app.use(morgan('dev'))
app.use(
    cors({
      origin: ["https://jobs-r-us-production.up.railway.app/"],
      methods: ["GET", "POST", "PUT","DELETE"],
      credentials: true,
      origin: true,
    })
  );



mongoose.connect(`${process.env.MONGO_URI}`)
    .then(console.log('Connected to DB'))



app.get('/', (req, res) => {
    console.log(req)
    res.status(200).send('Welcome to the server')
})

app.use('/auth', require('./routes/authRouter'))
app.use('/api', jwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/jobs', require('./routes/jobRouter'))
app.use('/api/staff', require('./routes/staffRouter'))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnauthorizedError') {
        res.status(err.status)
    }
    return res.send({errMsg :err.message})
})


app.listen(process.env.PORT, () => {
    console.log(`Server is active on port: ${process.env.PORT}`)
})