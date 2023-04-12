require('dotenv').config()
const express = require('express');
const port = process.env.PORT;


class Server{
    constructor(){
        this.app = express();
        this.routes();
    }//end constructor()

    listen(){
        this.app.listen(port, () =>{
            console.log(`Listening at the port http://localhost:${port}`)
        })
    }
    routes(){
        this.app.use('/dexter/api', require('../detexter-api/routes/route'))
    }//end routes()

    
}//end Server

module.exports= Server;



