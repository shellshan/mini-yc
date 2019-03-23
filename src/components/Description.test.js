import React from 'react';
import ReactDOM from 'react-dom';
import Description from './Description';

const fetch = jest.fn(() => new Promise(resolve => resolve()));

it('Description renders without crashing(Will fail TBF)', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Description ind='1' id='121003' key='121003'/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
