import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../utils/funcTest';
import Loading from '.';

const setUp = (props = {}) => {
  const component = shallow(<Loading {...props} />);
  return component;
};

describe('Loading Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  describe('component testing', () => {
    it('should render without errors', () => {
      const wrapper = findByTestAttr(component, 'loading');
      expect(wrapper.length).toBe(1);
    });
  });
  describe('Checking Prop Types', () => {
    it('should not throw a warning', () => {
      const expectedProp = {
        isLoading: true,
      };
      const propstrr = checkProps(Loading, expectedProp);
      expect(propstrr).toBeUndefined();
    });
  });
});
