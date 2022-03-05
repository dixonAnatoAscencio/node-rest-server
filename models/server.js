const express = require('express')
const cors = require('cors')

//Express basado en clases
class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'
        
        //Middlewares
        this.middlewares()

        //Rutas de mi Aplicacion
        this.routes()
    }

    middlewares(){
    
        //Cors
        this.app.use( cors())

        //Lectura y parseo del body 
        this.app.use( express.json())
    
        //Directorio Publico
        this.app.use( express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPath , require('../routes/user.routes'))
    }
   
    listen(){
        this.app.listen(process.env.PORT, () => {
        console.log('Servidor Corriendo en el puerto ', this.port)
        })
    }
    
}

module.exports = Server