// import { hydrate } from '@actions/commonActions';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetch } from 'xpc-utils';

const initialState = {
  tasks: [],
  isTasksLoaded: false,
};

export const fetchTasks = createAsyncThunk('fetch/tasks', async (payload, { getState }) => {
  try {
    // const {
    //   user: { sessionId },
    //   course: { id: courseId },
    // } = getState();
    // if (!courseId) return [];
    // const response = await fetch(`https://translation.xperiencify.dev/api/v1/translation/${courseId}/EN`, {
    //   sessionId,
    // });
    // const data = await response.json();
    // return data;
    console.log(1);
    const response = await fetch(`/api/getJobList/`, { method: 'GET' });
    const responseData = await response.json();
    console.log({ response, responseData });
    return responseData;
  } catch (err) {
    console.log('fetch translation error', err);
    return {};
  }
});

const tasksSlice = createSlice({
  name: 'tasksSliceData',
  initialState,
  extraReducers: (project) => {
    project.addCase(fetchTasks.fulfilled, (state, { payload: { data: tasks } }) => {
      return {
        ...state,
        isTasksLoaded: true,
        tasks,
      };
    });
  },
});

export default tasksSlice;
