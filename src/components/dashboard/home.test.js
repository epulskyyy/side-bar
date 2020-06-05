import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import { findByTestAttr } from './../../utils/funcTest';

const setUp = (props = {}) => {
  const component = shallow(<Home {...props} />);
  return component;
};

describe('Home Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'dashboardHome');
    expect(wrapper.length).toBe(5);
  });
});
