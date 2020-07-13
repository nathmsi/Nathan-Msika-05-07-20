
import {
    SEARCH_ONCHANGE_ASYNC
} from './types'




export const searchOnChange = (value) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH_ONCHANGE_ASYNC,
            payload: value
        })
    }
};