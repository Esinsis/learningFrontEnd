import React, {Component} from 'react';
import Count from "./containers/Count";
import Person from "./containers/Person";
// import store from "./redux/store";

class App extends Component {
    render() {
        return (
            <div>
                {/*给容器组件传递store*/}
                {/*<Count store={store}/>*/}
                <Count/>
                <hr/>
                <Person/>
            </div>
        );
    }
}

export default App;