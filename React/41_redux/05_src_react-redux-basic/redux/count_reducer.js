import {INCREMENT, DECREMENT} from "./constants";

const initState = 0;
export default function count_reducer(preState = initState, action) {
    const {type, data} = action;
    switch (type){
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}