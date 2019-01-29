import { createAction, handleActions, createActions } from 'redux-actions';
import produce from 'immer';
import reduce from 'lodash/reduce';
import set from 'lodash/set';
import snakeCase from 'lodash/snakeCase';
// import createStateActions, { progressStateInitial } from '../progress-state/create-actions';

const initialState = {
  table: {},
  list: [],
  status: '',
  page: '1',
  hasPrev: false,
  hasNext: false,
  isActive: null,
  hasRelation: null,
  isFetching: false,
};

export const FETCH_REQUEST = 'companies/FETCH';
export const FETCH_SUCCESS = 'companies/FETCH_SUCCESS';
export const FETCH_FAILURE = 'companies/FETCH_FAILURE';
export const SET_VIEW_TYPE = 'companies/SET_VIEW_TYPE';

export const fetchRequest = createAction(FETCH_REQUEST);
export const fetchSuccess = createAction(FETCH_SUCCESS);
export const fetchFailure = createAction(FETCH_FAILURE);
export const setViewType = createAction(SET_VIEW_TYPE);

export const companyActions = createActions({
  COMPANY: {
    FETCH_REQUEST: null,
    FETCH_SUCCESS: null,
    FETCH_FAILURE: null,
    TEST: {
      TEST_A: {
        TEST_Z: null,
      },
      TEST_B: null,
    },
  },
});

const consts1 = (actions, path = [], accum = {}) => {
  Object.keys(actions).forEach(key => {
    if (typeof actions[key] === 'object') {
      return consts1(actions[key], [...path, key], accum);
    }
    set(accum, [...path, key], [...path, key].map(value => snakeCase(value).toUpperCase()).join('/'));
    return accum;
  });
  return accum;
};

const consts = (actions, path = [], accum = {}) =>
  reduce(
    actions,
    (result, value, key) => {
      if (typeof value === 'object') {
        return consts(value, [...path, key], result);
      }
      set(result, [...path, key], [...path, key].map(p => snakeCase(p).toUpperCase()).join('/'));
      return result;
    },
    accum,
  );
console.log(consts(companyActions));
// console.log(companyActions);

const reducer1 = handleActions(
  new Map([
    [
      companyActions.company.fetchRequest,
      state =>
        produce(state, draft => {
          draft.status = 'request';
        }),
    ],
    [
      companyActions.company.fetchSuccess,
      state =>
        produce(state, draft => {
          draft.status = 'complete';
        }),
    ],
    [
      companyActions.company.fetchFailure,
      state =>
        produce(state, draft => {
          draft.status = 'error';
        }),
    ],
  ]),
  initialState,
);

const reducer = handleActions(
  {
    [FETCH_REQUEST]: state =>
      produce(state, draft => {
        draft.isFetching = true;
      }),
    [FETCH_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.state = 'complete';
        // draft.table = { ...state.table, ...action.payload.table };
        // draft.list = action.payload.list;
        // draft.state = action.payload.state;
        // draft.page = action.payload.page;
        // draft.hasPrev = action.payload.hasPrev;
        // draft.hasNext = action.payload.hasNext;
        // draft.isActive = action.payload.isActive;
        // draft.hasRelation = action.payload.hasRelation;
        // draft.isFetching = false;
      }),
    [FETCH_FAILURE]: state =>
      produce(state, draft => {
        draft.state = 'error';
        draft.isFetching = false;
      }),
    [SET_VIEW_TYPE]: (state, action) =>
      produce(state, draft => {
        draft.viewType = action.payload;
      }),
  },
  initialState,
);

export default reducer1;
