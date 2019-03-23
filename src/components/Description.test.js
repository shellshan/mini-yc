import React from 'react';
import ReactDOM from 'react-dom';
import waitUntil from 'async-wait-until';
import { mount, shallow, configure } from 'enzyme';
import Description from './Description';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('Description fetching item from API', async (done) => {
     const root = mount(<Description ind='1' id='121003' key='121003' />);
     await waitUntil(() => root.state('info').hasOwnProperty('id'));
     expect(root.state('info').id).toEqual(121003);
     done();
 });
