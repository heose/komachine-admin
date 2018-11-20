import { combineReducers } from 'redux';
import companyReducer from './modules/companies/reducer';

export default combineReducers({
  companies: companyReducer,
});
