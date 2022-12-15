import React, {Component} from "react";
import {NavLink} from "react-router-dom";

export default class MyNavLink extends Component{

    render() {

        return(
            // <NavLink activeClassName="atguigu" className="list-group-item" {...this.props}>{this.props.children}</NavLink>
            /*标签体内容在标签的children 属性中*/
            <NavLink className="list-group-item" {...this.props}/>
        )
    }
}