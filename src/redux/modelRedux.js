import { createSlice } from "@reduxjs/toolkit";

export const ModelSlice = createSlice({
  name: "Model",
  initialState: {
    Models: [],
    isFetching: false,
    error: false,
  },

  reducers: {
    //GET ALL
    getModelStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getModelSuccess: (state, action) => {
      state.isFetching = false;
      state.Models = action.payload;
    },
    getModelFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // DELETE
    deleteModelStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteModelSuccess: (state, action) => {
      state.isFetching = false;
      state.Models.splice(
        state.Models.findIndex((item) => item._id === action.payload.id),
        1
      );
    },
    deleteModelFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // UPDATE
    updateModelStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateModelSuccess: (state, action) => {
      state.isFetching = false;
      state.Models[
        state.Models.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.Model;
    },
    updateModelFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // ADD
    addModelStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addModelSuccess: (state, action) => {
      state.isFetching = false;
      state.Models.push(action.payload);
    },
    addModelFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //Clear Models
    clearModels: (state) => {
      state.Models = [];
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const {
  getModelStart,
  getModelSuccess,
  getModelFailure,
  deleteModelStart,
  deleteModelSuccess,
  deleteModelFailure,
  updateModelStart,
  updateModelSuccess,
  updateModelFailure,
  addModelStart,
  addModelSuccess,
  addModelFailure,
  clearModels,
} = ModelSlice.actions;

export default ModelSlice.reducer;
