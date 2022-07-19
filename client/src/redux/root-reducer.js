import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todoReducer from './todo/todo.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todo']
};

const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,

});

export default persistReducer(persistConfig, rootReducer);
