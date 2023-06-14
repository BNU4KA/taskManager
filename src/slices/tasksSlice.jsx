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
    const response = await fetch(`${ROOT_API_URL}/Job/projectjoblist/?projectId=${projectId}`);
    const responseData = await response.json();
    onSuccess(responseData);
    return responseData;
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

export const fetchTask = createAsyncThunk('fetch/task', async ({ onSuccess = noop, taskId = '' }, { getState }) => {
  try {
    const response = await fetch(`${ROOT_API_URL}/Job/item/?id=${taskId}`);
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
    const { taskId, onSuccess = noop, tasks } = payload;
    await fetch(`${ROOT_API_URL}/Job/delete?jobId=${taskId}`, { method: 'DELETE', headers: { "Content-Type": "application/json" } });
    const updatedState = tasks?.filter((item) => item?.jobId !== taskId);
    onSuccess(updatedState);
    return { taskId };
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

export const createTask = createAsyncThunk('create/task', async (payload, { getState }) => {
  try {
    const { taskId, onSuccess = noop, title, description, projectId, endDate } = payload;
    await fetch(`${ROOT_API_URL}/Job/create/`, { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({ Title: title, Description: description, ProjectRefId: projectId, StartDate: new Date(), Status: 0, EndDate: endDate, EstimetedTime: 10, SpentTime: 5, progress: 0, JobRefId: "" }) });
    onSuccess();
    return { taskId, title, description, projectId };
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

export const createProject = createAsyncThunk('create/Project', async (payload, { getState }) => {
  try {
    const { title, description } = payload;
    const response = await fetch(`${ROOT_API_URL}/Project/create/`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ Title: title, Description: description }) });
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
    const response = await fetch(`${ROOT_API_URL}/Project/list/`);
    const responseData = await response.json();
    onSuccess(responseData);
    return responseData;
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

export const updateTask = createAsyncThunk('update/task', async (payload, { getState }) => {
  try {
    const { taskId, onSuccess = noop, title, description, projectRefId: projectId, endDate, jobId, progress, status } = payload;
    await fetch(`${ROOT_API_URL}/Job/update/`, { method: 'PATCH', headers: { "Content-Type": "application/json" }, body: JSON.stringify({ Title: title, Description: description, ProjectRefId: projectId, StartDate: new Date(), Status: status, EndDate: endDate, EstimetedTime: 10, SpentTime: 5, progress, JobRefId: "", jobId }) });
    onSuccess();
    return { taskId, title, description, projectId };
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

export const fetchProgress = createAsyncThunk('fetch/progress', async (payload, { getState }) => {
  try {
    const response = await fetch(`${ROOT_API_URL}/Project/progress`, { method: 'GET', headers: { "Content-Type": "application/json" } });
    console.log('response', response);
    const responseData = await response.json();
    console.log('responseData', responseData);
    return '';
  } catch (err) {
    console.log('fetch progress error', err);
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
    tasks.addCase(deleteTask.fulfilled, (state, { payload }) => {
      const { taskId } = payload || {};
      const updatedState = state?.tasks?.filter((item) => item?.jobId !== taskId);
      return {
        ...state,
        isTasksLoaded: true,
        tasks: updatedState,
      };
    });
    tasks.addCase(getProjects.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isProjectsLoaded: true,
        projects: payload,
      };
    });
    tasks.addCase(createTask.fulfilled, (state, { payload }) => {
      return {
        ...state,
        tasks: [...state.tasks, payload],
        isTasksLoaded: true,
      };
    });
  },
});

export default tasksSlice;
