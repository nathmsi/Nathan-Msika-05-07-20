import yelp from '../../api/yelp';
import { delay, put, takeLatest } from 'redux-saga/effects';

import {
    SET_AUTO_COMPLETE_SEARCH,
    SEARCH_ONCHANGE_ASYNC,
    SEARCH_ONCHANGE_ERROR
} from '../actions/types';

const apikey = process.env.REACT_APP_API_KEY


function* callApiSearchWeather(action) {
    try {
        yield delay(600);
        const response = yield yelp.get(`/locations/v1/cities/autocomplete?apikey=${apikey}&q=${action.payload}`);
        console.log(response.data);
        yield put({
            type: SET_AUTO_COMPLETE_SEARCH,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: SEARCH_ONCHANGE_ERROR,
            payload: 'error message'
        });
    }
}




export default function* mySaga() {
    yield takeLatest(SEARCH_ONCHANGE_ASYNC, callApiSearchWeather);
}