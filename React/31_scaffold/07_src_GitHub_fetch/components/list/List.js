import React, {Component} from "react";
import PubSub from 'pubsub-js'
import './list.css'

export default class List extends Component {

    state = {
        users: [],
        isFirst: true, //是否为第一次打开页面
        isLoading: false, //是否正在加载
        err: '' // 存储请求相关的错误信息
    }

    componentDidMount() {
        // (_, data)第一个下划线参数占位
        this.token = PubSub.subscribe("USER_INFO", (_, data) => {
            this.setState(data);
        })
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state;
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
                        isLoading ? <h2>Loading...</h2> :
                            err ? <h2 style={{color: 'red'}}>{err}</h2> :
                                users.map((userObj) => {
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                                <img alt="head_portrait" src={userObj.avatar_url}
                                                     style={{width: '100px'}}/>
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}