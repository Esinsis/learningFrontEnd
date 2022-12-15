import React, {Component, Fragment} from 'react';
import Demo from "./components/08_ErrorBoundary/Parent";

class App extends Component {
  render() {
    return (
        <Fragment>
            <Demo/>
        </Fragment>
    );
  }
}

export default App;
