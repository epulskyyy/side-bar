import { usage, invoice } from '../action-types';
import { convertDate } from '../function/function';

export const initialState = {
  usage: [],
  data: [],
  dataShowUsage: [],
  isFetching: true,
  dataChartUsage: [],
  successRate: null,
  pagingData: null,
  isTable: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case usage.FETCH_TABLE_USAGE:
      return {
        ...state,
        isTable: true,
      };
    case usage.FETCH_USAGE_CHART:
      return {
        ...state,
        dataChartUsage: action.payload,
      };
    case usage.FETCH_ONCHANGE_USAGE_CHART:
      return {
        ...state,
        dataChartUsage: null,
      };
    case usage.FETCH_ONCHANGE_USAGE_CHART_SUCCES:
      return {
        ...state,
        dataChartUsage: action.payload,
      };
    case invoice.FETCH_SUCCESS_RATE:
      return {
        ...state,
        successRate: action.payload,
      };

    case usage.FETCH_USAGE:
      return {
        ...state,
        usage: action.payload,
        dataShowUsage: action.payload,
        pagingData: action.pagingData,
        isFetching: false,
        isTable: false,
      };

    case usage.SEARCH_USAGE:
      const word = action.search;
      const newData = state.usage.filter(
        (item) =>
          item.request.toUpperCase().includes(word.toUpperCase()) ||
          item.response_code.toUpperCase().includes(word.toUpperCase()) ||
          item.response_description
            .toUpperCase()
            .includes(word.toUpperCase()) ||
          item.status_code.toUpperCase().includes(word.toUpperCase()) ||
          (convertDate(item.date).full + ',' + convertDate(item.date).dTime)
            .toUpperCase()
            .includes(word.toUpperCase())
      );
      if (word === '') {
        return {
          ...state,
          dataShowUsage: state.usage,
          isTable: false,
        };
      } else {
        return {
          ...state,
          dataShowUsage: newData,
          isTable: false,
        };
      }
    default:
      return state;
  }
};
