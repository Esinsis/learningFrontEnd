import React, {Component} from "react";
import PropTypes from "prop-types";
import './index.css'

export default class Footer extends Component {

    // 对接受的props进行： 类型、必要性的限制
    static propTypes = {
        checkAllTodo: PropTypes.func.isRequired,
        clearAllDone: PropTypes.func.isRequired
    }

    selectAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
    }

    clearAllDone = () => {
        this.props.clearAllDone();
    }

    render() {
        const {todos} = this.props;
        const doneCount = todos.reduce((pre, current) => {
            return pre + (current.done ? 1 : 0)
        }, 0)
        return (
            <div className="todo-footer">
                <label>
                    {/*注意不能使用defaultChecked,这个只能在初始化的时候执行一次，并且如果使用checked就必须添加onChange*/}
                    <input type="checkbox" checked={doneCount === todos.length && todos.length !== 0}
                           onChange={this.selectAll}/>
                </label>
                <span>
                <span>已完成{doneCount} </span> / 全部{todos.length}
                </span>
                <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
            </div>
        );
    }
}