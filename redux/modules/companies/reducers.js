import { handleActions, createActions } from 'redux-actions';
import produce from 'immer';
import { createConsts } from '../../utils';
// import createStateActions, { progressStateInitial } from '../progress-state/create-actions';

const initialState = {
  entities: {},
  lookups: [],
  status: '',
  errorCode: null,
  page: '1',
  hasPrev: false,
  hasNext: false,
  isActive: null,
  hasRelation: null,
  isFetching: false,
};

export const actions = createActions({
  COMPANY: {
    FETCH_REQUEST: null,
    FETCH_SUCCESS: ({ entities, result }) => ({ entities, lookups: result.company }),
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
      (state, { payload: { entities, lookups } }) =>
        produce(state, draft => {
          draft.status = 'complete';
          draft.entities = { ...state.entities, ...entities };
          draft.lookups = lookups;
          // draft.table = { ...state.table, ...action.payload.table };
          // draft.list = action.payload.list;
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
          draft.errorCode = action.payload.status || 500;
          draft.status = 'error';
        }),
    ],
  ]),
  initialState,
);

export default reducer;
