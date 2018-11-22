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
};

export const FETCH_REQUEST = 'companies/FETCH';
export const FETCH_SUCCESS = 'companies/FETCH_SUCCESS';
export const FETCH_FAILURE = 'companies/FETCH_FAILURE';

const reducer = handleActions(
  {
    // [FETCH_SUCCESS]: state => state,
    [FETCH_FAILURE]: state =>
      produce(state, draft => {
        draft.state = 'error';
      }),
  },
  initialState,
);

export const fetchRequest = createAction(FETCH_REQUEST);
export const fetchSuccess = createAction(FETCH_SUCCESS);

export default reducer;
