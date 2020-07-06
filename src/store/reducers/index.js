// redux
import { combineReducers, applyMiddleware, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'

// persist redux store
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// reducers
import WeatherReducer from './WeatherReducer';
import FavoritesReduce from './FavoritesReduce';

const reducers = combineReducers({
    weather: WeatherReducer,
    favorites: FavoritesReduce
})


const rootPersistConfig = {
    key: 'persist-data',
    storage: storage,
    blacklist: ['weather'],
}


const pReducer = persistReducer(rootPersistConfig, reducers);

const store = createStore(pReducer, {}, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);


export {
    persistor,
    store
}