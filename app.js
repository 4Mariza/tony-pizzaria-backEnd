/*********************************************************************************************
 * Objetivo: Criação de um API para manipular dados de uma pizzaria
 * Data: 06/12/2023
 * Autor: Maria Luiza Gomes de Almeida
 * Versão: 1.0
*********************************************************************************************/

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {request} = require('http')

const app = express()

app.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

app.get('/usuarios/id/:id', cors(), async function(request, response,next){
    
    let idUsuario = request.params.id

    let controleDadosUsuarios = require('./module/usuariosFunctions')
    let dadosUsuarios = controleDadosUsuarios.getUsuarios(idUsuario)

    if(dadosUsuarios){
        response.json(dadosUsuarios)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro:'Item não encontrado'})
    }
})


app.listen('8080', function(){
    console.log('API funcionando!')
})