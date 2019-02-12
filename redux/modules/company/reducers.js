import { handleActions, createActions } from 'redux-actions';
import produce from 'immer';
import { createConsts } from '~/redux/utils';

const initialState = {
  entities: {},
  lookups: [],
  pagination: {},
  status: '',
  errorCode: null,
  isFetching: false,
};

export const actions = createActions({
  COMPANY: {
    FETCH_REQUEST: null,
    FETCH_SUCCESS: ({ entities, result, pagination }) => ({ entities, lookups: result.company, pagination }),
    FETCH_FAILURE: null,
    TOGGLE_ACTIVE: null,
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
      (state, { payload: { entities, lookups, pagination } }) =>
        produce(state, draft => {
          draft.status = 'complete';
          draft.entities = { ...state.entities, ...entities };
          draft.pagination = pagination;
          draft.lookups = lookups;
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
    [
      actions.company.toggleActive,
      (state, action) =>
        produce(state, draft => {
          draft.entities.company[action.payload.id].is_active = action.payload.is_active;
        }),
    ],
  ]),
  initialState,
);

export default reducer;
