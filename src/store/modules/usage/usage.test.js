import { usage } from '../action-types';
import usageReducers from './reducers';
import { initialState as state } from './reducers';

describe('Usage Reducer', () => {
  it('should return default state', () => {
    const newState = usageReducers(undefined, {});
    expect(newState).toEqual(state);
  });
  it('should return new state if reciving type FETCH_ONCHANGE_USAGE_CHART', () => {
    const newState = usageReducers(undefined, {
      type: usage.FETCH_ONCHANGE_USAGE_CHART,
    });
    expect(newState).toEqual({
      ...state,
      dataChartUsage: null,
    });
  });
  it('should return new state if reciving type FETCH_ONCHANGE_USAGE_CHART_SUCCES', () => {
    const newState = usageReducers(undefined, {
      type: usage.FETCH_ONCHANGE_USAGE_CHART_SUCCES,
      payload: {},
    });
    expect(newState).toEqual({
      ...state,
      dataChartUsage: {},
    });
  });
  it('should return new state if reciving type FETCH_USAGE_CHART', () => {
    const newState = usageReducers(undefined, {
      type: usage.FETCH_USAGE_CHART,
      payload: {},
    });
    expect(newState).toEqual({
      ...state,
      dataChartUsage: {},
    });
  });
  it('should return new state if reciving type FETCH_USAGE', () => {
    const newState = usageReducers(undefined, {
      type: usage.FETCH_USAGE,
      payload: {},
      pagingData: {},
    });
    expect(newState).toEqual({
      ...state,
      usage: {},
      dataShowUsage: {},
      pagingData: {},
      isFetching: false,
      isTable: false,
    });
  });
  it('should return new state if reciving type SEARCH_USAGE', () => {
    const newState = usageReducers(undefined, {
      type: usage.SEARCH_USAGE,
      search: 'test',
    });
    expect(newState).toEqual({
      ...state,
      dataShowUsage: [],
      isTable: false,
    });
  });
  it('should return new state if reciving type FETCH_TABLE_USAGE', () => {
    const newState = usageReducers(undefined, {
      type: usage.FETCH_TABLE_USAGE,
    });
    expect(newState).toEqual({
      ...state,
      isTable: true,
    });
  });
});
