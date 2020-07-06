
import {
    ADD_FAVORITE,
    DELETE_ONE_FAVORITE,
    DELETE_ALL_FAVORITE
} from './types'




export const addToFavorite = (country) => {
    return (dispatch) => {
        dispatch({
            type: ADD_FAVORITE,
            payload: country
        })
    }
};

export const deleteOneFavorite = (key) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_ONE_FAVORITE,
            payload: key
        })
    }
};

export const deleteAllFavorite = () => {
    return (dispatch) => {
        dispatch({
            type: DELETE_ALL_FAVORITE
        })
    }
}




