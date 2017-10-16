import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

it('renders App component message', () => {
  const wrapper = shallow(<App />);
  const message = <h2>App Component</h2>;

  expect(wrapper.contains(message)).toEqual(true);
});
