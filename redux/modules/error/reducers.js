import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const initialState = {
  status: null,
};

export const SET_ERR_STATUS = 'error/SET_ERR_STATUS';
export const UNSET_ERR_STATUS = 'error/UNSET_ERR_STATUS';

export const setErrStatus = createAction(SET_ERR_STATUS);
export const unsetErrStatus = createAction(UNSET_ERR_STATUS);

const reducer = handleActions(
  {
    [SET_ERR_STATUS]: (state, action) =>
      produce(state, draft => {
        draft.status = action.payload;
      }),
    [UNSET_ERR_STATUS]: state =>
      produce(state, draft => {
        draft.status = null;
      }),
  },
  initialState,
);

export default reducer;
