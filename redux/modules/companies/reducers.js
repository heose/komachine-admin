import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const initialState = {
  table: {},
  list: [],
  state: '',
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

const reducer = handleActions(
  {
    [FETCH_REQUEST]: state =>
      produce(state, draft => {
        draft.isFetching = true;
      }),
    [FETCH_SUCCESS]: (state, action) =>
      produce(state, draft => {
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

export const fetchRequest = createAction(FETCH_REQUEST);
export const fetchSuccess = createAction(FETCH_SUCCESS);
export const fetchFailure = createAction(FETCH_FAILURE);
export const setViewType = createAction(SET_VIEW_TYPE);

export default reducer;
