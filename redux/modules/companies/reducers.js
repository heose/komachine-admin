import { handleActions, createActions } from 'redux-actions';
import produce from 'immer';
import { createConsts } from '~/redux/utils';
// import createStateActions, { progressStateInitial } from '../progress-state/create-actions';

const initialState = {
  entities: {},
  lookups: [],
  status: '',
  errorCode: null,
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
