

const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

//desestructuracion

const [ , , p3 ] = personajes;
console.log( p3 );

//-----------------------------------------

const retornaArreglo = () => {
    return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea

const prueba = (valor) => {
    return [ valor, ()=>{console.log('Hola Mundo')}];
};

const [nombre, setNombre] = prueba('Nemecio');

console.log(nombre);
setNombre();