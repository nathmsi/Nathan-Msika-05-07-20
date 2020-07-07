import {
    SELECTED_COUNTRY
} from '../actions/types'


const TelAviv = {
    Key: '215854',
    LocalizedName: 'Tel Aviv'
}
const Paris = {
    Key: '623',
    LocalizedName: 'Paris'
}

const INITIAL_STATE = {
    selectedCountry: TelAviv // default value selected 
};



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECTED_COUNTRY:
            return {
                ...state, selectedCountry: {
                    Key: action.payload.Key,
                    LocalizedName: action.payload.LocalizedName
                }
            }
        default:
            return state;
    }
}





