import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { findByTestAttr, checkProps } from './../../utils/funcTest';

const setUp = (props = {}) => {
  const component = shallow(<Card {...props} />);
  return component;
};

describe('Card Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  describe('component testing', () => {
    it('should render without errors', () => {
      const wrapper = findByTestAttr(component, 'card');
      expect(wrapper.length).toBe(1);
    });
  });
  describe('Checking Prop Types', () => {
    it('should not throw a warning', () => {
      const expectedProp = {
        className: 'test string ',
        width: 1,
        height: 1,
        children: 'anything',
      };
      const propstrr = checkProps(Card, expectedProp);
      expect(propstrr).toBeUndefined();
    });
  });
});
