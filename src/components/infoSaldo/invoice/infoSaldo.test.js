import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../../utils/funcTest';
import CardLaporanInvoice from './CardLaporanInvoice';
import InfoSaldoInvoice from './InfoSaldoInvoice';

const setUp = (props = {}) => {
  const component = shallow(<InfoSaldoInvoice {...props} />);
  return component;
};

const setUp2 = (props = {}) => {
  const component = shallow(<CardLaporanInvoice {...props} />);
  return component;
};

describe('Info Saldo Component', () => {
  let component;
  let component2;
  beforeEach(() => {
    component = setUp();
    component2 = setUp2();
  });
  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'infosaldo');
    expect(wrapper.length).toBe(1);
  });
  describe('Laporan Invoice Component', () => {
    it('should render without errors', () => {
      const wrapper = findByTestAttr(component2, 'laporanInvoice');
      expect(wrapper.length).toBe(2);
    });
  });
});
