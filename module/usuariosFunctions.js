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

// console.log(getUsuarios(1))