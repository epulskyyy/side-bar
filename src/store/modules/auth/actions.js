import { auth } from '../action-types';
import Axios from 'axios';

export const login = (post, checked) => async (dispatch) => {
  await dispatch({ type: auth.LOGIN });
  await Axios.post(`https://reqres.in/api/login`, post)
    .then((res) => {
      dispatch({
        type: auth.LOGIN_SUCCESS,
        jwt: res.data.token,
        post: post,
        isChecked: checked,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logout = () => async (dispatch) => {
  return dispatch({ type: auth.LOGOUT_SUCCESS });
};
