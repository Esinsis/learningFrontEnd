import React, {Component} from 'react'
import {Link, Route} from "react-router-dom";
import Details from "./details/Details";

export default class Message extends Component {
    state = {
        messageArr: [
            {id: '01', title: '消息1'},
            {id: '02', title: '消息2'},
            {id: '03', title: '消息3'},
        ]
    }

    replaceShow = (id, title) => {
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
        this.props.history.replace(`/home/message/detail`,{id, title});
    }

    pushShow = (id, title) => {
        // this.props.history.push(`/home/message/detail/${id}/${title}`)
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
        this.props.history.push(`/home/message/detail`, {id, title})
    }

    back = ()=>{
        this.props.history.goBack()
    }

    forward = ()=>{
        this.props.history.goForward()
    }

    go = ()=>{
        this.props.history.go(-2)
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
                                    <Link to={{
                                        pathname: '/home/message/detail',
                                        state: {id: obj.id, title: obj.title}
                                    }}>{obj.title}</Link>
                                    &nbsp;
                                    <button onClick={() => this.pushShow(obj.id, obj.title)}>push查看</button>
                                    &nbsp;
                                    <button onClick={() => this.replaceShow(obj.id, obj.title)}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* state参数无需声明接收，正常注册路由即可 */}
                {/*<Route path="/home/message/detail/:id/:title" component={Details}/>*/}
                <Route path="/home/message/detail/" component={Details}/>

                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}
