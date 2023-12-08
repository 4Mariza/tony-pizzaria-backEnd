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
const users = []

app.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

app.get('/usuarios/info/:id', cors(), async function(request, response,next){
    
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

app.get('/pizzasInfo', cors(), async function(request, response, next){
    let controleProdutos = require ('./module/produtosFunctions')
    let dadosProdutos = controleProdutos.getAllPizzas()

    if(dadosProdutos){
        response.json(dadosProdutos)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro:'Item não encontrado.'})
    }
})

app.get('/pizzas', cors(), async function(request, response, next){
    let controlePizzas = require('./module/produtosFunctions')
    let pizzas = controlePizzas.getPizzas()

    if(pizzas){
        response.json(pizzas)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro: 'Item não encontado.'})
    }
})

app.get('/categorias', cors(), async function(request, response, next){
    let controleCategorias = require('./module/produtosFunctions')
    let dadosCategorias = controleCategorias.getCategoria()

    if(dadosCategorias){
        response.json(dadosCategorias)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro: 'Item não encontrado.'})
    }
})

app.get('/produto/categoria/:id', cors(), async function(request, response, next){

    let idCategoria = request.params.id

    let controle = require('./module/produtosFunctions')
    let dados = controle.getProdutoCategoria(idCategoria)

    if(dados){
        response.json(dados)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro: 'Item não encontrado.'})
    }
})

app.get('/produtos/categoria/:id', cors(), async function(request, response, next){
    let idCategoria = request.params.id

    let controleLista = require('./module/produtosFunctions')
    let dadosLista = controleLista.listarProdutosCategoria(idCategoria)

    if(dadosLista){
        response.json(dadosLista)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro:'Item não encontrado.'})
    }
})

app.get('/comentarios/produto/:id', cors(), async function(request,response, next){

    let idProuto = request.params.id

    let controleComentarios = require('./module/produtosFunctions')
    let dadosComentarios = controleComentarios.getComentarios(idProuto)

    if(dadosComentarios){
        response.json(dadosComentarios)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro: 'Item não encontrado'})
    }
})


app.listen('8080', function(){
    console.log('API funcionando!')
})