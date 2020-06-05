import { usage, invoice } from '../action-types';
import { api1, api5 } from '../../../utils/axios';

//Action for table Usage
export const fetchDataUsage = (page) => async (dispatch) => {
  if (page == null) {
    page = '1';
  }
  await dispatch({ type: usage.FETCH_TABLE_USAGE });
  await api5
    .get(`/${page}`)
    .then((res) => {
      const paging = {
        dataPerPage: res.data.per_page,
        totalPage: res.data.total_page,
        page: res.data.page,
        totalData: res.data.total,
      };
      dispatch({
        type: usage.FETCH_USAGE,
        payload: res.data.data,
        pagingData: paging,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const searchHandlerUsage = (search) => async (dispatch) => {
  await dispatch({ type: usage.FETCH_TABLE_USAGE });
  await dispatch({ type: usage.SEARCH_USAGE, search: search });
};
export const fetchChartUsage = () => async (dispatch) => {
  await dispatch({ type: usage.FETCH_ONCHANGE_USAGE_CHART });
  await api1
    .get(`/last24`)
    .then((res) => {
      dispatch({ type: usage.FETCH_USAGE_CHART, payload: res.data.data });
      dispatch({
        type: invoice.FETCH_SUCCESS_RATE,
        payload: res.data.success_rate,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const onChangeMonthUsage = () => async (dispatch) => {
  dispatch({ type: usage.FETCH_ONCHANGE_USAGE_CHART });
};
export const onChangeMonthUsageSuccess = (param) => async (dispatch) => {
  await dispatch({ type: usage.FETCH_ONCHANGE_USAGE_CHART });
  await api1
    .get(`/${param}`)
    .then((res) => {
      dispatch({
        type: usage.FETCH_ONCHANGE_USAGE_CHART_SUCCES,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
