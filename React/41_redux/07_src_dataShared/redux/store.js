/*
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import count from './reducers/count';
import persons from './reducers/person'

const reducers = combineReducers({count, persons});
export default createStore(reducers,applyMiddleware(thunk));