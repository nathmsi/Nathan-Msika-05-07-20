import {
    SET_AUTO_COMPLETE_SEARCH,
    SEARCH_ONCHANGE_ERROR
} from '../actions/types'






const INITIAL_STATE = {
    autoComplateSearch: [],
    loading: false,
    errorMessage: ''
};



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_AUTO_COMPLETE_SEARCH:
            return {
                ...state,
                autoComplateSearch: action.payload
            }
        case SEARCH_ONCHANGE_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}





