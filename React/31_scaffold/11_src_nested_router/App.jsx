import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/about" component={About}/>
                                    {/*exact 开启精准匹配, 但是会影响多级路由的使用, 能不用则不用*/}
                                    <Route path="/home" component={Home}/>
                                    <Redirect to="/home"/>
                                    {/*<Route path='*' element={<Navigate to='/home'/>}/>*/}
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}