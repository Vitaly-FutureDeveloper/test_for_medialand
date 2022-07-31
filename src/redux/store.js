import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import authReducer from "./authReducer";
import mainReducer from "./mainReducer";
import modalsReducer from "./modalsReducer";


const reducers = combineReducers({
	formPage: authReducer,
	mainPage: mainReducer,
	modals: modalsReducer,
});

const store = createStore(reducers,
	applyMiddleware(thunkMiddleware)
);


export default store;