
 import { heroes } from './data/heroes'

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
//         //tarea
//         const p1 = getHeroeById(2);
//         resolve(p1);

//         //reject('No se pudo encontrar el heroe');
        
//     }, 2000);

// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn(err));


const getHeroeByIdSync = ( id ) => {

    return new Promise( (resolve, reject) => {

            setTimeout(() => {
                //tarea
                const p1 = getHeroeById(id);
                
                if( p1 )
                {
                    resolve(p1);
                }else{
                    reject('No se pudo encontrar el heroe');
                }
                
                
            }, 2000);
        
        });

};

getHeroeByIdSync(5)
    .then( heroe => console.log('Heroe', heroe) )
    .catch(err => console.warn(err));




//funcion de obtener Heroe por ID

export const getHeroeById = (id) => {
    return heroes.find( h =>  h.id === id );
};

export const getHeroesByOwner = (owner) => {
    return heroes.filter( h => h.owner === owner);
};