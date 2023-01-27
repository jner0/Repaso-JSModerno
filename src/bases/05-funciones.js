
//Funciones en JS

const saludar = function (nombre){
    return `hola, ${nombre}`;
}

const saludar2 = (nombre) => `hola, ${nombre}`;


console.log(saludar('Tommy'));
console.log(saludar2('Shelby'));

const getUser = () => {
    return{
        uid: 'ABC123',
        userName: 'El_papi1502'
    }
}

console.log( getUser() );

//Tarea

function getUsuarioActivo (nombre){
    return{
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

//1. Transformo la funcion a una funcion flecha

const getUsuarioActivo2 = (nombre) => 
    ({
        uid: 'ABC789',
        username: nombre
    });


const usuarioActivo2 = getUsuarioActivo2('Thalia');
console.log(usuarioActivo2);