import React, {Component} from "react";
import Header from "./components/header";
import List from "./components/list";
import Footer from "./components/footer";
import './App.css'

export default class App extends Component {

    /**
     * 状态在哪里，操作状态的方法就在哪里
     */
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打豆豆', done: false}
        ]
    }

    addTodo = (todoObj) => {
        const {todos} = this.state;
        const newTodos = [todoObj, ...todos];
        this.setState({todos: newTodos});
    }

    updateTodo = (id, done) => {
        // 获取状态中的todo
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {...todo, done};
            } else {
                return todo;
            }
        })
        this.setState({todos: newTodos});
    }

    // 删除一个Item
    deleteTodo = (id) => {
        //获取原来的state
        const {todos} = this.state;
        // 删除指定id的todo对象
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        })
        this.setState({todos: newTodos});
    }

    // 全选所有的Item
    checkAllTodo = (done) => {
        const {todos} = this.state;

        const newTodos = todos.map((todoObj) => {
            return {...todoObj, done};
        })
        this.setState({todos: newTodos});
    }

    clearAllDone = () => {
        const {todos} = this.state;
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done;
        })
        this.setState({todos: newTodos});
    }


    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}
