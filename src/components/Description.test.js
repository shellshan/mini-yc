import React from 'react';
import ReactDOM from 'react-dom';
import Description from './Description';

it('Description renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Description ind='1' id='121003' key='121003'/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
