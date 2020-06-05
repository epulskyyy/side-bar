import { invoice } from '../action-types';
import { api4, api2, api5 } from '../../../utils/axios';
export const fetchData = (page) => async (dispatch) => {
  if (page == null) {
    page = '1';
  }
  await dispatch({ type: invoice.FETCH_TABLE_INFOSALDO });

  await api4
    .get(`/${page}`)
    .then((res) => {
      const paging = {
        dataPerPage: res.data.data_per_page,
        totalPage: res.data.total_page,
        page: res.data.first_page,
        totalData: res.data.total_data,
      };
      dispatch({
        type: invoice.FETCH_INVOICE,
        payload: res.data.data,
        pagingData: paging,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const searchHandler = (search) => async (dispatch) => {
  await dispatch({ type: invoice.FETCH_TABLE_INFOSALDO });
  await dispatch({ type: invoice.SEARCH_INVOICE, search: search });
};

export const fetchChartInvoice = () => async (dispatch) => {
  await dispatch({ type: invoice.FETCH_ONCHANGE_INVOICE_CHART });
  await api2
    .get(`/ThisMonth`)
    .then((res) => {
      dispatch({ type: invoice.FETCH_INVOICE_CHART, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onChangeMonthInvoice = () => async (dispatch) => {
  dispatch({ type: invoice.FETCH_ONCHANGE_INVOICE_CHART });
};
export const onChangeMonthInvoiceSuccess = (param) => async (dispatch) => {
  await dispatch({ type: invoice.FETCH_ONCHANGE_INVOICE_CHART });
  await api2
    .get(`/${param}`)
    .then((res) => {
      dispatch({
        type: invoice.FETCH_ONCHANGE_INVOICE_CHART_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const chartInfoSaldo = (param) => async (dispatch) => {
  if (param == null) {
    param = 'thisMonth';
  }
  await dispatch({ type: invoice.FETCHING_CHART_INFO_SALDO });
  await api5
    .get(`/${param}`)
    .then(({ data: { data, invoice_bulan_berjalan, invoice_bulan_lalu } }) => {
      dispatch({
        type: invoice.FETCH_CHART_INFO_SALDO,
        dataChart: data,
        dataInfoSaldo: {
          ibb: invoice_bulan_berjalan,
          ibl: invoice_bulan_lalu,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
