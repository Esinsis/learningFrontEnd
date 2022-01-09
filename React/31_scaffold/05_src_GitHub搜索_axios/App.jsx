import React, {Component} from "react";
import Header from "./components/header/Header";
import List from "./components/list/List";

export default class App extends Component{

    state = {
        users: [],
        isFirst: true, //是否为第一次打开页面
        isLoading: false, //是否正在加载
        err: '' // 存储请求相关的错误信息
    }

    updateAppState = (stateObj) => {
        this.setState(stateObj);
    }

    render() {
        return(
            <div className="container">
                <Header updateAppState = {this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}