//import { heroes } from './data/heroes';
import {heroes} from './data/heroes'

const getHeroeById = (id) => {
    return heroes.find( h => h.id === id);
}

console.log(getHeroeById(2));

//find solo regresa un valor, cuando es mas de uno se usa filter

const getHeroesByOwner = (owner) => {
    return heroes.filter( h => h.owner === owner);
};

console.log(getHeroesByOwner('DC'));