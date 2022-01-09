import React, {Component} from "react";
import axios from "axios";

export default class App extends Component{

    getStudents = () => {
        axios.get("https://localhost:5001/api1/students").then(
            response => {
                console.log(response.data)
            },
            error => {
                console.error(error)
            }
        );
    }

    getCars = () => {
        axios.get("https://localhost:5002/api2/cars").then(
            response => {
                console.log(response.data)
            },
            error => {
                console.error(error)
            }
        );
    }


    render() {
        return(
            <div>
                <button onClick={this.getStudents}>获取学生DATA</button>
                <button onClick={this.getCars}>获取汽车DATA</button>
            </div>
        )
    }
}