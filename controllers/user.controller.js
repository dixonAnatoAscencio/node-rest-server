const { response, request } = require('express')


const usuariosGet = (req = request, res = response) => {

    //parametros de segmento y query 
    const {q, nombre = 'No name', apiKey, page = 1, limit } = req.query

    res.json({
        message: 'Get API - controlador',
        q,
        nombre,
        apiKey,
        page,
        limit
    })
  }

  const usuariosPut = (req, res) => {
   
    const id = req.params.id

    res.json({
        message: 'Put API - controlador',
        id
    })
  }

  const usuariosPost = (req, res) => {
   
    const { nombre, edad} = req.body
   
    res.json({
        message: 'Post API - controlador',
        nombre,
        edad
    })
  }

  const usuariosDelete =  (req, res) => {
    res.status(403).json({
        message: 'Delete API - controlador'
    })
  }
  
  const usuariosPatch =  (req, res) => {
    res.status(403).json({
        message: 'Delete API - controlador'
    })
  } 


  module.exports = {
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosDelete,
      usuariosPatch
  }