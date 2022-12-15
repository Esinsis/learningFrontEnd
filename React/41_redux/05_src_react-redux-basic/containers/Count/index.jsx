import CountUI from '../../components/Count'
import {connect} from "react-redux";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";

function mapStateToProps(state) {
    return {count: state};
}

function mapDispatchToProps(dispatch){
    return {
        increment: number => dispatch(createIncrementAction(number)),
        decrement: number => dispatch(createDecrementAction(number)),
        ascnyIncrement : (number, time) => dispatch(createIncrementAsyncAction(number, time))
    }
}

// 使用connect()()创建并暴露一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
