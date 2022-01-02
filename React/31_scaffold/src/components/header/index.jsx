import React, {Component} from "react";
import {nanoid} from "nanoid";
import PropTypes from 'prop-types';

import './index.css';

export default class Header extends Component {

    // 对接受的props进行： 类型、必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        const {keyCode, target} = event
        if (keyCode !== 13) return;
        if (target.value.trim() === ''){
            alert("输入的内容不能为空");
            return;
        }
        const todo = {
            id: nanoid(),
            name: target.value,
            done: false
        };
        this.props.addTodo(todo);
        target.value = "";
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}