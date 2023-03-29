// const MongoClient = require("mongodb").MongoClient;

// const connection_string = "mongodb://localhost:27017/"


// MongoClient.connect(connection_string),{useUnifiedTopology:true},function(err,client){

//     if(err) throw error;
//     console.log("connected to mongo");

//     client.close();
// }

const mongoClient = require('mongodb').MongoClient
const state = {
    db: null
}

module.exports.connect = function(done) {
    const url = 'mongodb://localhost:27017'
    const dbname = 'chatgpt'

    mongoClient.connect(url, (err, data) => {
        if (err) return done(err)

        state.db = data.db(dbname)
        done()
    })
}
module.exports.get = function() {
    return state.db

}