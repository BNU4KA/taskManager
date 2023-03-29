import { combineReducers } from 'redux';
import tasksSlice from './tasksSlice';

export default combineReducers({
  [tasksSlice.name]: tasksSlice.reducer,
});
