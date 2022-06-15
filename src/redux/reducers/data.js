import {createSlice} from '@reduxjs/toolkit';
const slice = createSlice ({
  name: 'randomData',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },

  reducers: {
    startFetch (state) {
      state.loading = true;
    },
    successFetch (state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    errorFetch (state, action) {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});
const {startFetch, successFetch, errorFetch} = slice.actions;

export const getData = () => async dispatch => {
  try {
    dispatch (startFetch ());
    const response = await fetch ('https://randomuser.me/api/');
    const data = await response.json ();
    return dispatch (successFetch (data));
  } catch (error) {
    return dispatch (errorFetch (error.message));
  }
};

export default slice.reducer;
