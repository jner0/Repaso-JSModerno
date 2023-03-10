
//DESESTRUCTURACION

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'ironman',
    rango: 'Filantropo'
};

const { nombre, edad, clave } = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const retornaPersona = ({nombre, edad, rango, clave = 'Capitan'}) => {

    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232
        }
    }
};

const {nombreClave, anios, latlng:{ lat, lng} } = retornaPersona(persona);
console.log(nombreClave, anios);
console.log( lat, lng);
