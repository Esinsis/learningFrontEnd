import React, {Component} from 'react';
import Count from "./containers/Count";
// import store from "./redux/store";

class App extends Component {
    render() {
        return (
            <div>
                {/*给容器组件传递store*/}
                {/*<Count store={store}/>*/}
                <Count/>
            </div>
        );
    }
}

export default App;