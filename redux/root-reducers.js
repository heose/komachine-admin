import { combineReducers } from 'redux';
import companyReducer from './modules/companies/reducers';

export default combineReducers({
  companies: companyReducer,
});
