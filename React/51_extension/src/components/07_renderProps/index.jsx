import React, {Component} from 'react';

import './index.css';

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <A render={name => <B name={name}/>}/>
            </div>
        );
    }
}

class A extends Component {

    state = {name: 'tom'}

    render() {
        return (
            <div className="a">
                <h3>我是A组件</h3>
                {/*通过回调函数的方式把数据传递给子组件*/}
                {this.props.render(this.state.name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className="b">
                <h3>我是B组件, {this.props.name}</h3>
            </div>
        )
    }
}

