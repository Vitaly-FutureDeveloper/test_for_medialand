import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import mainReducer from "./mainReducer";


const reducers = combineReducers({
	formPage: authReducer,
	mainPage: mainReducer,
});

const store = createStore(reducers,
	applyMiddleware(thunkMiddleware)
);

window.store = store;
export default store;