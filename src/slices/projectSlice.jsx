import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { noop } from 'lodash';

const initialState = {
  tasks: [],
  isTasksLoaded: false,
};

export const fetchTasks = createAsyncThunk('fetch/tasks', async ({ onSuccess = noop }, { getState }) => {
  try {
    const response = await fetch(`/api/getJobList/`, { method: 'GET' });
    const responseData = await response.json();
    const { data } = responseData;
    onSuccess(data);
    return data;
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

export const deleteTaks = createAsyncThunk('delete/task', async (payload, { getState }) => {
  try {
    const { taskId } = payload;
    const response = await fetch(`/api/deleteJob/`, { body: taskId, method: 'DELETE' });
    const responseData = await response.json();
    const { data } = responseData;
    onSuccess(data);
    return data;
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

const tasksSlice = createSlice({
  name: 'tasksSliceData',
  initialState,
  extraReducers: (tasks) => {
    tasks.addCase(fetchTasks.fulfilled, (state, { payload: { data: tasks } }) => {
      return {
        ...state,
        isTasksLoaded: true,
        tasks,
      };
    });
    tasks.addCase(deleteTaks.fulfilled, (state, { payload: { data: tasks } }) => {
      return {
        ...state,
        isTasksLoaded: true,
        tasks,
      };
    });
  },
});

export default tasksSlice;
