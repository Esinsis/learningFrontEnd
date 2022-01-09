import React, {Component} from "react";
import axios from "axios";

export default class Header extends Component {

    search = () => {
        // 连续解构赋值并重命名
        const {keyWordNode: {value: keyword}} = this
        axios.get(`http://localhost:3000/api/search/users?q=${keyword}`).then(
            response => {
                console.log(response);
            },
            error => {
                console.error(error);
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    <input ref={c => this.keyWordNode = c} type="text" placeholder="输入关键词进行搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}