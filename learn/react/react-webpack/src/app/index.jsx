import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

class First extends React.Component {
  render() {
    return (
      <div>
        <p>
          Hello React
        </p>
        <AwesomeComponent/>
      </div>
    );
  }
};

render(
  <First/>, document.getElementById('first'));
