import React,{Component} from "react";
import hello from './index.module.css'

export default class Hello extends Component{

    render() {
        return(
            <h1 className={hello.title}>Hello</h1>
        );
    }
}