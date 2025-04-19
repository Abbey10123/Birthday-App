const app = require ('./app');
require('./db').connectToMongoDB()


const port = 4040

app.listen(port, ()=> {
    console.log (`app is running on ${port}`)
})