import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { userReducer } from './userReducer';
import { campaignReducer } from './campaignReducer';

export default combineReducers({
  userReducer,
  campaignReducer,
  dataReducer
});
