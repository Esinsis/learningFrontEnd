import React from 'react'
import ReactDOM from "react-dom";

// export default class Demo extends React.Component {
//
//     state = {count: 0};
//     myRef = React.createRef();
//
//     add = () => {
//         this.setState((state) => ({count: state.count + 1}));
//     }
//
//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'));
//     }
//
//     componentDidMount() {
//         this.timer = setInterval(()=>{
//             this.setState(state => ({count: state.count + 1}));
//         }, 1000);
//     }
//
//     // 组件将要被卸载之前清除定时器
//     componentWillUnmount() {
//         clearInterval(this.timer);
//     }
//
//     show = () => {
//         alert(this.myRef.current.value);
//     }
//
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef}/>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>卸载组件</button>
//                 <button onClick={this.show}>提示信息</button>
//             </div>
//         );
//     }
// }

export default function Demo() {

    const [count, setCount] = React.useState(0);
    const myRef = React.useRef();

    React.useEffect(() => {
        // 相当于componentWillUpdate 和 componentDidMount
        let timer = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
        // 类似componentWillUnmount 生命周期函数
        return () => {
            clearInterval(timer);
        }
    }, []); // 添加一个数组，监控谁的变化就写入谁即可 [count]

    function add() {
        // 第一种写法
        // setCount(count + 1);
        console.log(setCount)
        setCount(count => count + 1)
    }

    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    function show() {
        alert(myRef.current.value);
    }

    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>提示信息</button>
        </div>
    )
}
