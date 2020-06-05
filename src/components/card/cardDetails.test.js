import React from 'react';
import { shallow } from 'enzyme';
import CardDetails from './CardDetails';
import { findByTestAttr, checkProps } from './../../utils/funcTest';
const expectedProp = {
  active: 'test string',
  title: 'test string',
  data: 1,
  arrow: 'test string',
  percent: 'test string',
};
const setUp = (props = expectedProp) => {
  const component = shallow(<CardDetails {...props} />);
  return component;
};

describe('Card Details Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  describe('Check Component', () => {
    it('should render without errors', () => {
      const wrapper = findByTestAttr(component, 'cardDetails');
      expect(wrapper.length).toBe(4);
    });
  });
  describe('Check Prop Types', () => {
    const propstrr = checkProps(CardDetails, expectedProp);
    expect(propstrr).toBeUndefined();
  });
});
