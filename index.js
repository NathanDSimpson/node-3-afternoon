// import for front end
// require for back end 
// this is generally speaking

require("dotenv").config();
const express = require("express")
const massive = require("massive")
const products_controller = require('./controller/products_controller')


const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING) // connects our app to our heroku database. returns a promise
.then(db_instance => {
    app.set('db', db_instance) // stores our database. we can access via 
    app.listen(SERVER_PORT, () => {
        console.log(`Server on port ${SERVER_PORT}`)
    })
})
.catch(err => console.log(`We have an error in our massive function call ${err}`));



app.get(`api/products`, products_controller.getAll);
app.get(`api/products/:id`, products_controller.getOne);
app.post(`api/products`, products_controller.create);
app.put(`api/products/:id`, products_controller.update);
app.delete(`api/products/:id`, products_controller.delete);



