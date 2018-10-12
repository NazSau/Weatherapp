import {SET_CITY} from './../Actions';
export const city = (state = {}, action) => {//valor por defecto al parametro de funcion ES6
    switch(action.type){
        case SET_CITY:
            return action.payload;//{ ...state, city: action.payload};//estado anterior para es el valor de la accion
            //si esxiste la prpop city se cambia por lo que viene en el payload, si no existe se crea con lo que viene, eso dice el comando de arriba
            // el nnuevo objeto es una composicion de lo que tiene como estado inicial mas lo que se esta agregando, esto si no lo encuentra
            //una copia del estado con una propiedad cambiada
        default:
            return state;
    }
}