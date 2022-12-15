import React, { Component } from 'react'
import {Link, Route} from "react-router-dom";
import Details from "./details/Details";

export default class Message extends Component {
    state = {
        messageArr:[
            {id:'01',title:'消息1'},
            {id:'02',title:'消息2'},
            {id:'03',title:'消息3'},
        ]
    }
    render() {
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((obj) => {
                            return (
                                <li key={obj.id}>
                                    {/* 向路由组件传递state参数 */}
                                    <Link to={{pathname:'/home/message/detail', state:{id: obj.id, title: obj.title}}}>{obj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* state参数无需声明接收，正常注册路由即可 */}
                <Route path="/home/message/detail" component={Details}/>
            </div>
        )
    }
}
