import yelp from '../../api/yelp';

import {
    SELECTED_COUNTRY
} from './types'





// action when country is selected

export const SelctedCountry = ({ Key, LocalizedName }) => {
    return async (dispatch) => {
        dispatch({
            type: SELECTED_COUNTRY,
            payload: {
                Key,
                LocalizedName
            }
        });
    }
}
