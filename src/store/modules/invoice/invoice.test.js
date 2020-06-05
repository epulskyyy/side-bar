import { invoice } from '../action-types';
import invoiceReducers from './reducers';
import usageReducers from './../usage/reducers';
import { initialState as state } from './reducers';
import { initialState as stateUsage } from './../usage/reducers';

describe('Invoice Reducer', () => {
  it('should return default state', () => {
    const newState = invoiceReducers(undefined, {});
    expect(newState).toEqual(state);
  });
  it('should return new state if reciving type FETCH_TABLE_INFOSALDO', () => {
    const newState = invoiceReducers(undefined, {
      type: invoice.FETCH_TABLE_INFOSALDO,
    });
    expect(newState).toEqual({
      ...state,
      isTable: true,
    });
  });
  it('should return new state if reciving type FETCHING_CHART_INFO_SALDO', () => {
    const newState = invoiceReducers(undefined, {
      type: invoice.FETCHING_CHART_INFO_SALDO,
    });

    expect(newState).toEqual({
      ...state,
      dataChartInfoSaldo: [],
      dataInfoSaldo: null,
    });
  });
  it('should return new state if reciving type FETCH_CHART_INFO_SALDO', () => {
    const newState = invoiceReducers(undefined, {
      type: invoice.FETCH_CHART_INFO_SALDO,
      dataChart: [
        {
          date: '2020-05-04',
          nominal: 150,
        },
      ],
      dataInfoSaldo: {
        ibb: 1050,
        ibl: 150,
      },
    });
    expect(newState).toEqual({
      ...state,
      dataChartInfoSaldo: [
        {
          date: '2020-05-04',
          nominal: 150,
        },
      ],
      dataInfoSaldo: {
        ibb: 1050,
        ibl: 150,
      },
    });
  });
  it('should return new state if reciving type FETCH_ONCHANGE_INVOICE_CHART_SUCCESS', () => {
    const newState = invoiceReducers(undefined, {
      type: invoice.FETCH_ONCHANGE_INVOICE_CHART_SUCCESS,
      payload: { data: {} },
    });
    expect(newState).toEqual({
      ...state,
      dataChartInvoice: { data: {} },
    });
  });
  it('should return new state if reciving type FETCH_ONCHANGE_INVOICE_CHART', () => {
    const newState = invoiceReducers(undefined, {
      type: invoice.FETCH_ONCHANGE_INVOICE_CHART,
    });
    expect(newState).toEqual({
      ...state,
      dataChartInvoice: null,
    });
  });
  it('should return new state if reciving type FETCH_SUCCESS_RATE', () => {
    const newState = usageReducers(undefined, {
      type: invoice.FETCH_SUCCESS_RATE,
      payload: 100,
    });
    expect(newState).toEqual({
      ...stateUsage,
      successRate: 100,
    });
  });
  it('should return new state if reciving type FETCH_INVOICE_CHART', () => {
    const newState = invoiceReducers(undefined, {
      type: invoice.FETCH_INVOICE_CHART,
      payload: { data: {} },
    });
    expect(newState).toEqual({
      ...state,
      dataChartInvoice: { data: {} },
    });
  });
  it('should return new state if reciving type SEARCH_INVOICE', () => {
    const newState = invoiceReducers(undefined, {
      type: invoice.SEARCH_INVOICE,
      search: 'search',
    });
    expect(newState).toEqual({
      ...state,
      dataShow: [],
      isTable: false,
    });
  });
  it('should return new state if reciving type FETCH_INVOICE', () => {
    const newState = invoiceReducers(undefined, {
      type: invoice.FETCH_INVOICE,
      payload: {},
      pagingData: {},
    });
    expect(newState).toEqual({
      ...state,
      data: {},
      dataShow: {},
      pagingData: {},
      isFetching: false,
      isTable: false,
    });
  });
});
