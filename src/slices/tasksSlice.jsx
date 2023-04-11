import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { noop } from 'lodash';
import { ROOT_API_URL } from '../constants';

const initialState = {
  tasks: [],
  projects: [],
  task: {},
  project: {},
  isTasksLoaded: false,
  isProjectsLoaded: false,
};

export const fetchTasks = createAsyncThunk('fetch/tasks', async ({ onSuccess = noop }, { getState }) => {
  try {
    const response = await fetch(`${ROOT_API_URL}/api/Job/list/`);
    const responseData = await response.json();
    onSuccess(responseData);
    return responseData;
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

export const fetchTask = createAsyncThunk('fetch/task', async ({ onSuccess = noop, taskId = 'qwe' }, { getState }) => {
  try {
    const response = await fetch(`${ROOT_API_URL}/api/Job/item?id=${taskId}`);
    const responseData = await response.json();
    onSuccess(responseData);
    return responseData;
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

export const deleteTaks = createAsyncThunk('delete/task', async (payload, { getState }) => {
  try {
    const { taskId } = payload;
    const response = await fetch(`${ROOT_API_URL}/api/deleteJob/`, { body: taskId, method: 'DELETE' });
    const responseData = await response.json();
    const { data } = responseData;
    onSuccess(data);
    return data;
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

export const createProject = createAsyncThunk('create/Project', async (payload, { getState }) => {
  try {
    const { title, description } = payload;
    console.log({ title, description });
    // const response = await fetch(`${ROOT_API_URL}/api/Project/create/`, { method: "POST", headers: { Prefer: 'params=single-object', "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ProjectId: '', Title: title, Description: description }) });
    const response = await fetch(`${ROOT_API_URL}/api/Project/create/`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ProjectId: '', Title: title, Description: description }) });
    console.log(response);
    const responseData = await response.json();
    const { data } = responseData;
    console.log({ response, responseData });
    onSuccess(data);
    return data;
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

export const getProjects = createAsyncThunk('get/Projects', async ({ onSuccess = noop }, { getState }) => {
  try {
    const response = await fetch(`${ROOT_API_URL}/api/Project/list/`);
    const responseData = await response.json();
    onSuccess(responseData);
    return responseData;
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

const tasksSlice = createSlice({
  name: 'tasksSliceData',
  initialState,
  extraReducers: (tasks) => {
    tasks.addCase(fetchTasks.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isTasksLoaded: true,
        tasks: payload,
      };
    });
    tasks.addCase(fetchTask.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isTasksLoaded: true,
        task: payload,
      };
    });
    tasks.addCase(deleteTaks.fulfilled, (state, { payload: { data: tasks } }) => {
      return {
        ...state,
        isTasksLoaded: true,
        tasks,
      };
    });
    tasks.addCase(getProjects.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isProjectsLoaded: true,
        projects: payload,
      };
    });
  },
});

export default tasksSlice;
