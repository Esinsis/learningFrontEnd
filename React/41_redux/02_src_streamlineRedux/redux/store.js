/*
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
import {createStore} from "redux";
import count_reducer from './count_reducer';
export default createStore(count_reducer);