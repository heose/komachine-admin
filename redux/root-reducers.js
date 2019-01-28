import { combineReducers } from 'redux';
import errorReducer from './modules/error/reducers';
import companyReducer from './modules/companies/reducers';

export default combineReducers({
  error: errorReducer,
  companies: companyReducer,
});
