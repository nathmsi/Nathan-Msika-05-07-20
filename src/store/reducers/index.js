// redux
import { combineReducers, applyMiddleware, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'

// persist redux store
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// redux saga
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas'


// reducers
import WeatherReducer from './WeatherReducer';
import FavoritesReduce from './FavoritesReduce';
import SearchReducer from './SearchReducer';


const reducers = combineReducers({
    weather: WeatherReducer,
    favorites: FavoritesReduce,
    search: SearchReducer
})


const rootPersistConfig = {
    key: 'persist-data',
    storage: storage,
    blacklist: ['weather','search'],
}


const pReducer = persistReducer(rootPersistConfig, reducers);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(pReducer, {}, applyMiddleware(ReduxThunk,sagaMiddleware) );
const persistor = persistStore(store);

// then run the saga
sagaMiddleware.run(mySaga);

export {
    persistor,
    store
}