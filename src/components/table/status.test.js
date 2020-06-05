import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../utils/funcTest';
import Status from './Status';

const setUp = (props = {}) => {
  const component = shallow(<Status {...props} />);
  return component;
};

describe('Status Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  describe('component testing', () => {
    it('should render without errors', () => {
      const wrapper = findByTestAttr(component, 'statusRate');
      expect(wrapper.length).toBe(1);
    });
  });
  describe('Checking Prop Types', () => {
    it('should not throw a warning', () => {
      const expectedProp = {
        status: 'test',
        children: 'test',
      };
      const propstrr = checkProps(Status, expectedProp);
      expect(propstrr).toBeUndefined();
    });
  });
});
