import { combineReducers } from 'redux';
import tasksSlice from './tasksSlice';
import userSlice from './userSlice';

export default combineReducers({
  [tasksSlice.name]: tasksSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});
