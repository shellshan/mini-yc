import React from 'react';
import ReactDOM from 'react-dom';
import waitUntil from 'async-wait-until';
import { mount, shallow, configure } from 'enzyme';
import NewsFeeds from './NewsFeeds';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('NewsFeeds fetching ids from API', async (done) => {
     const root = mount(<NewsFeeds />);
     await waitUntil(() => root.state('ids').length);
     expect(root.state('ids')[0]).toBeGreaterThan(-1);
     done();
 });
