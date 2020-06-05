import { invoice } from '../action-types';

export const initialState = {
  usage: [],
  data: [],
  dataShow: [],
  isFetching: true,
  dataChartInvoice: null,
  isTable: false,
  dataChartInfoSaldo: [],
  dataInfoSaldo: null,
  pagingData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case invoice.FETCH_TABLE_INFOSALDO:
      return {
        ...state,
        isTable: true,
      };
    case invoice.FETCH_INVOICE_CHART:
      return {
        ...state,
        dataChartInvoice: action.payload,
      };
    case invoice.FETCH_ONCHANGE_INVOICE_CHART:
      return {
        ...state,
        dataChartInvoice: null,
      };
    case invoice.FETCH_ONCHANGE_INVOICE_CHART_SUCCESS:
      return {
        ...state,
        dataChartInvoice: action.payload,
      };

    case invoice.FETCH_INVOICE:
      return {
        ...state,
        data: action.payload,
        dataShow: action.payload,
        pagingData: action.pagingData,
        isFetching: false,
        isTable: false,
      };
    case invoice.SEARCH_INVOICE:
      const src = action.search;
      const data = state.data.filter(
        (item) =>
          item.tanggal.toUpperCase().includes(src.toUpperCase()) ||
          item.no_invoice.toUpperCase().includes(src.toUpperCase()) ||
          item.nominal.toUpperCase().includes(src.toUpperCase()) ||
          item.due_date.toUpperCase().includes(src.toUpperCase()) ||
          item.status.toUpperCase().includes(src.toUpperCase())
      );
      if (src === '') {
        return {
          ...state,
          dataShow: state.data,
          isTable: false,
        };
      } else {
        return {
          ...state,
          dataShow: data,
          isTable: false,
        };
      }
    case invoice.FETCHING_CHART_INFO_SALDO:
      return {
        ...state,
        dataChartInfoSaldo: [],
        dataInfoSaldo: null,
      };
    case invoice.FETCH_CHART_INFO_SALDO:
      return {
        ...state,
        dataChartInfoSaldo: action.dataChart,
        dataInfoSaldo: action.dataInfoSaldo,
      };
    default:
      return state;
  }
};
