
import {
    ADD_FAVORITE,
    DELETE_ONE_FAVORITE,
    DELETE_ALL_FAVORITE
} from '../actions/types';


const INITIAL_STATE = {
    favorites: []
};



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            const found = state.favorites.some(el => el.Key === action.payload.Key);
            if (found) {
                return { ...state, favorites: [...state.favorites.filter(el => el.Key !== action.payload.Key)] }
            } else {
                return { ...state, favorites: [...state.favorites, action.payload] }
            }
        case DELETE_ONE_FAVORITE:
            return { ...state, favorites: [...state.favorites.filter(el => el.Key !== action.payload)] }
        case DELETE_ALL_FAVORITE:
            return { ...state, favorites: [] }
        default:
            return state;
    }
}





