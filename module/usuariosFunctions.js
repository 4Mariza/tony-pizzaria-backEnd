var apiClientes = require('./apiClient')

var clientes = apiClientes.clientes.usuarios

const getUsuarios = (id) =>{
    let status = false
<<<<<<< HEAD
    let usuariosJSON = {}


    clientes.forEach(function(cliente){
        if(id == cliente.id){
            usuariosJSON.usuarios = cliente
        }

=======
    const usuariosJSON = {}

    clientes.id.forEach(function(cliente){
        console.log(cliente);
        const nome = cliente
        usuariosJSON.lista_usuarios = nome
>>>>>>> 98270d4ba2a4a268366935694ce40f97debe93b1
        status = true
    })

    if (status) 
        return usuariosJSON
    else
        return false
}

// console.log(getUsuarios(1))