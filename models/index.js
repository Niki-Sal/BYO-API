const mongoose = require('mongoose')

configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
 };

mongoose.connect('mongodb://localhost/writersbook', configOptions)

const db = mongoose.connection;

db.once('open', ()=> {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', (err)=> {
    console.error('error with database', err)
})

module.exports = {
    Author: require('./author'),
}
