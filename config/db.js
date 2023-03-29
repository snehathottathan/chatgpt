const mongoose = require('mongoose')
const colors = require('colors')
const dotenv= require('dotenv')
dotenv.config();
const connectDB = async () =>{

    try{
        await mongoose.connect(process.env.MONGO_URI)

        console.log(`CONNECTED TO MONGODB DATABASE ${mongoose.connection.host}`);
    }catch(error){
        console.log(`mongoDB DATABASE ERROR ${error}`)
    }
}
 

module.exports = connectDB

// const mongoClient = require('mongodb').MongoClient
// const state = {
//     db: null
// }

// module.exports.connect = function(done) {
//     const url = 'mongodb://localhost:27017'
//     const dbname = 'chatgpt'

//     mongoClient.connect(url, (err, data) => {
//         if (err) return done(err)

//         state.db = data.db(dbname)
//         done()
//     })
// }
// module.exports.get = function() {
//     return state.db

// }

// // getting-started.js
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

