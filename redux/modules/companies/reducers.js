import { handleActions, createActions } from 'redux-actions';
import produce from 'immer';
import { createConsts } from '../../utils';
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
  errorCode: null,
};

export const actions = createActions({
  COMPANY: {
    FETCH_REQUEST: null,
    FETCH_SUCCESS: null,
    FETCH_FAILURE: null,
  },
});
export const consts = createConsts(actions);

const reducer = handleActions(
  new Map([
    [
      actions.company.fetchRequest,
      state =>
        produce(state, draft => {
          draft.status = 'request';
        }),
    ],
    [
      actions.company.fetchSuccess,
      state =>
        produce(state, draft => {
          draft.status = 'complete';
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
    ],
    [
      actions.company.fetchFailure,
      (state, action) =>
        produce(state, draft => {
          draft.errorCode = action.payload.status;
          draft.status = 'error';
        }),
    ],
  ]),
  initialState,
);

export default reducer;
