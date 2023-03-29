let express=require('express')
const morgan = require('morgan')
const cors = require('cors')
const colors = require('color')
const bodyParser = require('body-parser')
const dotenv= require('dotenv')
const mongoose = require('mongoose')
const connectDB = require('./config/db')

const app=express()
// var database = require('./config/db')

dotenv.config()

//mongo connection
connectDB();

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(express.json)

const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send('hello')
})

// const mongoClient = require('mongodb').MongoClient
// const state = {
//     db: null
// }

// module.exports.connect = function(done) {
//     const url = 'mongodb://localhost:27017'
//     const dbname = 'chatgpt'

//     mongoClient.connect(url, (err, data) => {
//         if (err) return done(err)
//         else console.log('hh');
//         state.db = data.db(dbname)
//         done()
//        console.log('hh');
//     })
// }
// module.exports.get = function() {
//     return state.db

// }

// mongoose.set("strictQuery", false);
// mongoose.connect('mongodb://localhost:27017/chatgpt',{useNewUrlParser:true,useUnifiedTopology:true
// },(err)=>{
//     if(err) console.log('ccc');
//     else console.log('aaaa');
// })

app.listen(8080,()=>{
    console.log(`server connected in ${process.env.DEV_MODE} MODE ON PORT NO ${PORT}`)

})

// database.connect(()=>{
//     console.log('ccc');
// })