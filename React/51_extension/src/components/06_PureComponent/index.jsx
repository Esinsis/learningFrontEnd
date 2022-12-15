import React, {PureComponent} from 'react';

export default class Parent extends PureComponent {

    state = {
        carName: '特斯拉',
        students: ['小李','小红','小明']
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     // 只有数据变化时才需要重新render 子组件
    //     return nextState.carName !== this.state.carName;
    // }

    addStudent = () => {
        // const {students} = this.state;
        // this.setState({students: ['小刘', ...students]});

        this.setState(state => ({students: ['小刘',...state.students]}));
    }

    render() {
        console.log('Parent --- render()');
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <button onClick={this.addStudent} >添加一个小刘</button>
                <hr/>
                <Child carName={this.state.carName}/>
            </div>
        );
    }
}

class Child extends PureComponent{

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return nextProps.carName !== this.props.carName;
    // }

    render() {
        console.log('Child --- render()');
        return(
            <div className="child">
                <h3>我是Child组件</h3>
                <span>从父组件接受到的{this.props.carName}</span>
            </div>
        )
    }
}

