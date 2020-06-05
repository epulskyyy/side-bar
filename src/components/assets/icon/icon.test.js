import React from 'react';
import { shallow } from 'enzyme';
import {
  IcoArrowDownB,
  IcoArrowDownS,
  IcoArrowDropdown,
  IcoArrowLeft,
  IcoArrowUpB,
  IcoArrowUpS,
  IcoDashboard,
  IcoDashboardActive,
  IcoDownload,
  IcoInfoMutasi,
  IcoInfoSaldo,
  IcoInfoSaldoActive,
  IcoLogout,
  IcoSearch,
  IconFirstPage,
  IconLastPage,
  IconNextPage,
  IconPreviousPage,
  IconSideBar,
} from '../icon';
import { findByTestAttr, checkProps } from './../../../utils/funcTest';

describe('Icon Component', () => {
  describe('IcoArrowDownB Testing', () => {
    it('should render without errors  ', () => {
      const component = shallow(<IcoArrowDownB />);
      const wrapper = findByTestAttr(component, 'icoArrDB');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IcoArrowDownB, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IcoArrowDownS Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IcoArrowDownS />);
      const wrapper = findByTestAttr(component, 'icoArrDS');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IcoArrowDownS, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IcoArrowDropdown Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IcoArrowDropdown />);
      const wrapper = findByTestAttr(component, 'icoArrDD');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IcoArrowDropdown, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IcoArrowLeft Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IcoArrowLeft />);
      const wrapper = findByTestAttr(component, 'icoArrL');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IcoArrowLeft, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IcoArrowUpB Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IcoArrowUpB />);
      const wrapper = findByTestAttr(component, 'icoArrUB');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IcoArrowUpB, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IcoArrowUpS Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IcoArrowUpS />);
      const wrapper = findByTestAttr(component, 'icoArrUS');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IcoArrowUpS, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IcoDashboard Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IcoDashboard />);
      const wrapper = findByTestAttr(component, 'icoD');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IcoDashboard, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IcoDashboardActive Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IcoDashboardActive />);
      const wrapper = findByTestAttr(component, 'icoDA');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IcoDashboardActive, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IcoDownload Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IcoDownload />);
      const wrapper = findByTestAttr(component, 'icoDl');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IcoDownload, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IcoInfoMutasi Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IcoInfoMutasi />);
      const wrapper = findByTestAttr(component, 'icoIM');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IcoInfoMutasi, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IcoInfoSaldo Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IcoInfoSaldo />);
      const wrapper = findByTestAttr(component, 'icoIS');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IcoInfoSaldo, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IcoInfoSaldoActive Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IcoInfoSaldoActive />);
      const wrapper = findByTestAttr(component, 'icoISA');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IcoInfoSaldoActive, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IcoLogout Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IcoLogout />);
      const wrapper = findByTestAttr(component, 'icoLg');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IcoLogout, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IcoSearch Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IcoSearch />);
      const wrapper = findByTestAttr(component, 'icoSrc');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IcoSearch, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IconFirstPage Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IconFirstPage />);
      const wrapper = findByTestAttr(component, 'icoFP');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IconFirstPage, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IconLastPage Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IconLastPage />);
      const wrapper = findByTestAttr(component, 'icoLP');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IconLastPage, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IconNextPage Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IconNextPage />);
      const wrapper = findByTestAttr(component, 'icoNP');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IconNextPage, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IconPreviousPage Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IconPreviousPage />);
      const wrapper = findByTestAttr(component, 'icoPP');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IconPreviousPage, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
  describe('IconSideBar Testing', () => {
    it('should render without errors ', () => {
      const component = shallow(<IconSideBar />);
      const wrapper = findByTestAttr(component, 'icoSB');
      expect(wrapper.length).toBe(1);
    });
    it('checking prop types', () => {
      const expectedProp = {
        variant: '#676767',
      };
      const prpstrr = checkProps(IconSideBar, expectedProp);
      expect(prpstrr).toBeUndefined();
    });
  });
});
