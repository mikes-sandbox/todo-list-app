import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todoReducer from './todo/todo.reducer';
import userReducer from './user/user.reducer';
import uiReducer from './ui/ui.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todo','ui']
};

const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    ui: uiReducer,
});

export default persistReducer(persistConfig, rootReducer);
