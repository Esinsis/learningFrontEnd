import React, {Component} from "react";
import Header from "./components/header/Header";
import List from "./components/list/List";

export default class App extends Component{

    render() {
        return(
            <div className="container">
                <Header/>
                <List/>
            </div>
        )
    }
}