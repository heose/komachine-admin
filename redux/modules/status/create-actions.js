import { createActions } from 'redux-actions';
import produce from 'immer';

export const progressStateInitial = {
  progressState: '',
};

export default PREFIX =>
  createActions({
    [PREFIX]: {
      SET_STATE: (state, action) =>
        produce(state, draft => {
          draft.progressState = action.payload;
        }),
    },
  });
