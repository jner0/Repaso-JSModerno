const persona = {
    nombre: 'Domenica',
    apellido: 'Taieb',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 553214,
        lat: 14.323,
        lon: 34.215
    }
};
console.log(persona);
console.table( persona );

const persona2 = { ...persona }; //operador spread


console.log(persona2);