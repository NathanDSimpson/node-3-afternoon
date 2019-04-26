module.exports = {

    getAll(){
        const db = req.app.get('db')  // retrieves our database from storage inside of app. We do this inside of the 'massive' invocation of index.js
        db.read_products()
        .then(response => {   //read products is the name of the .sql file we want to execute. We have no parameter because we are reading all entries
            res.status(200).send(response) // "result" comes from db.read_products(our sql file). req, res come from app.get in our index.js
        })
        .catch( err => {
            res.status(500).send({errorMessage: "Nate you made an error!"});
            console.log(err)
          } );
        
    },

    getOne(){
        const db = req.app.get('db')
        const {id} = req.params // req comes from our 'app.get' evocation in app.js
        db.read_products([id])
        .then(response => {
            res.status(200).send(response)
        })
        .catch( err => {
            res.status(500).send({errorMessage: "Nate you made an error!"});
            console.log(err)
          } );
    },

    create(){
        const db = req.app.get('db')
        db.create_product([]) /// need something in the [] still
        .then(response =>{ 
            res.status(200).send(response)
        })
        .catch( err => {
            res.status(500).send({errorMessage: "Nate you made an error!"});
            console.log(err)
          } );
    },

    update(){
        const db = req.app.get('db')
        db.update_product([])  /// need something in the [] still
        .then(response => {   

        })
        .catch( err => {
            res.status(500).send({errorMessage: "Nate you made an error!"});
            console.log(err)
          } );
    },

    delete(){
        const db = req.app.get('db')
        db.delete_product([])  // need something in the [] still
        .then(response => {  

        })
        .catch( err => {
            res.status(500).send({errorMessage: "Nate you made an error!"});
            console.log(err)
          } );

    }
}