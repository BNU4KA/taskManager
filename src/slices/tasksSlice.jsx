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

export const fetchTasks = createAsyncThunk('fetch/tasks', async ({ onSuccess = noop, projectId = 'qwe' }, { getState }) => {
  try {
    const response = await fetch(`${ROOT_API_URL}/api/Job/list?project=${projectId}`);
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

export const deleteTask = createAsyncThunk('delete/task', async (payload, { getState }) => {
  try {
    const { taskId, onSuccess = noop, title, description, projectId } = payload;
    const response = await fetch(`${ROOT_API_URL}/api/Job/delete/`, { method: 'DELETE', headers: { "Content-Type": "application/json" }, body: JSON.stringify({ JobId: taskId, Title: title, Description: description, ProjectRefId: projectId }) });
    const responseData = await response.json();
    onSuccess(responseData);
    return { taskId };
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

export const createTask = createAsyncThunk('create/task', async (payload, { getState }) => {
  try {
    const { taskId, onSuccess = noop, title, description, projectId } = payload;
    console.log('taskId', { taskId, title, description, projectId });
    const response = await fetch(`${ROOT_API_URL}/api/Job/create/`, { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({ job: 0, Title: title, Description: description, ProjectRefId: projectId, StartDate: new Date(), Status: 0, EndDate: 0, EstimetedTime: "", SpentTime: "", Progreess: "", JobRefId: "" }) });
    console.log({ response });
    const responseData = await response.json();
    console.log({ responseData });
    onSuccess(responseData);
    return { taskId };
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

export const createProject = createAsyncThunk('create/Project', async (payload, { getState }) => {
  try {
    const { title, description } = payload;
    const response = await fetch(`${ROOT_API_URL}/api/Project/create/`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ Title: title, Description: description }) });
    const responseData = await response.json();
    const { data } = responseData;
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
    tasks.addCase(deleteTask.fulfilled, (state, { payload: { taskId } }) => {
      return {
        ...state,
        isTasksLoaded: true,
        tasks: state?.tasks?.filter((item) => item?.id !== taskId),
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
