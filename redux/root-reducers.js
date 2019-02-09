import { combineReducers } from 'redux';
import errorReducer from '~/redux/modules/error/reducers';
import companyReducer from '~/redux/modules/company/reducers';

export default combineReducers({
  error: errorReducer,
  company: companyReducer,
});
