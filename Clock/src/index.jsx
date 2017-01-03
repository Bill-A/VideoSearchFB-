import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <h1> Bill is learning React!</h1>;
  }
}

render(<App/>, document.getElementById('app'));