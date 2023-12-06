var apiProducts = require('./apiProducts')
var apiClient = require('./apiClient')
var produtos = apiProducts.produtos.produtos
var categorias = apiProducts.categorias.categorias

const getCategoria = () => {

    let status = false

    let categoriasJSON = {}
    let categoriasArray = []

    categorias.forEach(categoria => {
        categoriasArray.push(categoria)
        status = true
    });

    categoriasJSON.categorias = categoriasArray
    categoriasJSON.quantidade = categoriasArray.length
    categoriasJSON.status = status

    if (status)
        return categoriasJSON
    else
        return false
}

const getAllPizzas = () => {
    let status = false
    let pizzasArray = []

    produtos.forEach(pizza => {
        let pizzasJSON = {}
        if (pizza.categoria.includes(categorias[0])) {
            pizzasJSON.id = pizza.id
            pizzasJSON.nome = pizza.pizza
            pizzasJSON.categorias = pizza.categoria
            pizzasJSON.foto = pizza.foto
            pizzasJSON.preco = pizza.preco
            pizzasJSON.descricao = pizza.descricao
            pizzasJSON.favorita = pizza.favorita
            pizzasJSON.avaliacao = pizza.avaliacao
            pizzasJSON.comentarios = pizza.comentarios

            pizzasArray.push(pizzasJSON)
            status = true
        }
    })

    if (status)
        return { pizzasArray }
    else
        return false
}

const getProdutoCategoria = (idCategoria) => {
    let status = false
    let produtosArray = []

    produtos.forEach(produto => {
        // console.log(produto.categoria);

        produto.categoria.forEach(categoria => {
            let produtosJSON = {}
            if (categoria.id == id) {
                produtosJSON.id = produto.id
                produtosJSON.nome = produto.nome
                produtosJSON.categorias = produto.categoria
                produtosJSON.foto = produto.foto
                produtosJSON.preco = produto.preco
                produtosJSON.descricao = produto.descricao
                produtosJSON.favorita = produto.favorita
                produtosJSON.avaliacao = produto.avaliacao
                produtosJSON.comentarios = produto.comentarios

                produtosArray.push(produtosJSON)
                status = true
            }
        })


    })

    if (status)
        return { produtosArray }
    else
        return false

}

const getFavoritos = () => {
    let status = false

    let favoritasArray = []

    produtos.forEach(pizza => {
        let favoritasJSON = {}
        if (pizza.favorita == true) {
            favoritasJSON.id = pizza.id
            favoritasJSON.nome = pizza.nome
            favoritasJSON.categorias = pizza.categoria
            favoritasJSON.foto = pizza.foto
            favoritasJSON.preco = pizza.preco
            favoritasJSON.descricao = pizza.descricao
            favoritasJSON.favorita = pizza.favorita
            favoritasJSON.avaliacao = pizza.avaliacao
            favoritasJSON.comentarios = pizza.comentarios

            favoritasArray.push(favoritasJSON)
            status = true
        }
    })

    if (status)
        return { favoritasArray }
    else
        return false
}

const getComentarios = (idProduto) => {
    let status = false

    let usuarios = apiClient.clientes.usuarios
    let comentariosArray = []
    let comentarios = {}

    produtos.forEach(produto => {

        if (produto.id == idProduto) {

            produto.comentarios.forEach(comentario => {

                let comentarioJSON = {}
                comentarioJSON.id = comentario.id
                comentarioJSON.titulo = comentario.titulo
                comentarioJSON.data = comentario.data
                comentarioJSON.avaliacao = comentario.avaliacao
                comentarioJSON.comentario = comentario.comentario

                usuarios.forEach(usuario => {
                    if (comentario.id_usuario == usuario.id) {
                        comentarioJSON.foto = usuario.foto
                        comentarioJSON.usuario = usuario.nome

                    }
                    status = true
                })

                comentariosArray.push(comentarioJSON)

            })

        }
        
    })
    comentarios.comentarios = comentariosArray
    comentarios.quantidade = comentariosArray.length
    comentarios.status = status

    if (status)
    return comentarios
    else
    return false
}


// console.log(getAllPizzas())
// console.log(getCategoria())
// console.log(getProdutoCategoria(6))
// console.log(getComentarios(1))
// console.log(getFavoritos())

module.exports = {
    getAllPizzas,
    getCategoria,
    getComentarios,
    getFavoritos,
    getProdutoCategoria
}