import { createStore } from "redux";
import todoReducer from "./reducers";
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'persist-key',
    storage
}

const persistReducerr = persistReducer(persistConfig, todoReducer)
const store = createStore(persistReducerr, composeWithDevTools());
const persistor = persistStore(store) // persistor is for store the data in local storage
export default store;
export { persistor }