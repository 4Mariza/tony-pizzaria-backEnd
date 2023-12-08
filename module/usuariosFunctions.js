var apiClientes = require('./apiClient')

var clientes = apiClientes.clientes.usuarios

const getUsuarios = (id) =>{
    let status = false
    let usuariosJSON = {}


    clientes.forEach(function(cliente){
        if(id == cliente.id){
            usuariosJSON.usuarios = cliente
        }

        status = true
    })

    if (status) 
        return usuariosJSON
    else
        return false
}

const getListaUsuarios = () =>{
    let status = false
    let usuariosLista = []
    let usuariosJSON = {}
    
    clientes.forEach(function(cliente){
            usuariosLista.push(cliente)
            usuariosJSON.usuarios = usuariosLista
        status = true
    })

    if (status) 
        return usuariosJSON
    else
        return false
}

const cadastrarUsuario = (usuario) =>{
    let status = false
    let novoUsuario
    console.log(usuario);
    if(usuario.nome != "" && usuario.email != "" && usuario.telefone != "" && usuario.senha != ""){
        novoUsuario = {
            id: clientes[clientes.length - 1].id + 1,
            ...usuario
        }
        clientes.push(novoUsuario)

        status = true
    }

    if (status) 
        return novoUsuario
    else
        return false

}


// console.log(getUsuarios())
//console.log(getListaUsuarios())

module.exports={
    getUsuarios,
    getListaUsuarios,
    cadastrarUsuario
}