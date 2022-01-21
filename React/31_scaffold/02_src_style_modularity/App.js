import React,{Component} from "react";
import Hello from "./components/hello";
import Welcome from "./components/welcome";


class App extends Component{

    render() {
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        );
    }
}

export default App;