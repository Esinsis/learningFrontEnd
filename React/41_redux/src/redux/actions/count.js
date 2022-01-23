import {INCREMENT, DECREMENT} from "../constants";

export const increment = (data) => ({type: INCREMENT, data});
export const decrement = (data) => ({type: DECREMENT, data});
export const incrementAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, time);
    }
}
