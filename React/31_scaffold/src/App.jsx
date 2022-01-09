import React, {Component} from "react";
import Header from "./components/header/Header";
import List from "./components/list/List";

export default class App extends Component{

    state = {
        Git:[],
        isFrist:true,
        isLoad:false,
        isError:''
    }

    render() {
        return(
            <div className="container">
                <Header />
                <List/>
            </div>
        )
    }
}