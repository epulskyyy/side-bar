import checkPropsTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import reducer from './../store/modules/combineReducer';
import { loadState, saveState } from '../utils/localStorage';
import reduxThunk from 'redux-thunk';
export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propstrr = checkPropsTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
  return propstrr;
};

export const testStore = (initialState) => {
  const persistedState = loadState();
  const store = createStore(
    reducer,
    persistedState,
    applyMiddleware(reduxThunk),
    initialState
  );

  store.subscribe(() => {
    saveState({
      auth: store.getState().auth,
    });
  });
  return store;
};
