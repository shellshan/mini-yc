import React from 'react';
import ReactDOM from 'react-dom';
import HeaderData from './HeaderData';

it('HeaderData renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderData/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
