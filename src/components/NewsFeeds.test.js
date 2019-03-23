import React from 'react';
import ReactDOM from 'react-dom';
import NewsFeeds from './NewsFeeds';

it('NewsFeeds renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsFeeds/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
