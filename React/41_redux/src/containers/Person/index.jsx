import React, {Component} from 'react';
import {connect} from "react-redux";
import {nanoid} from 'nanoid';
import {addPersonAction} from "../../redux/actions/person";

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value * 1;
        const person = {id: nanoid(), name, age};
        this.props.addSinglePerson(person);
        this.nameNode.value = '';
        this.ageNode.value = '';
    }

    render() {
        return (
            <div>
                <h2>我是Person组件, 上方组件求和为: {this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((p) => {
                            return (<li key={p.id}>{p.name} -- {p.age}</li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({persons: state.persons, count: state.count}),
    {addSinglePerson: addPersonAction}
)(Person);