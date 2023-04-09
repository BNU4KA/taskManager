// import { hydrate } from '@actions/commonActions';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { noop } from 'lodash';
// import { fetch } from 'xpc-utils';

const initialState = {
  tasks: [],
  task: {},
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

export const fetchTask = createAsyncThunk('fetch/task', async ({ onSuccess = noop, taskId = 'qwe' }, { getState }) => {
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
    console.log({ response, responseData });
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
    tasks.addCase(fetchTask.fulfilled, (state, { payload: { data: task } }) => {
      return {
        ...state,
        isTasksLoaded: true,
        task,
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
