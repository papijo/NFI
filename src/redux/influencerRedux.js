import { createSlice } from "@reduxjs/toolkit";

export const InfluencerSlice = createSlice({
  name: "Influencer",
  initialState: {
    Influencers: [],
    isFetching: false,
    error: false,
  },

  reducers: {
    //GET ALL
    getInfluencerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getInfluencerSuccess: (state, action) => {
      state.isFetching = false;
      state.Influencers = action.payload;
    },
    getInfluencerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // DELETE
    deleteInfluencerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteInfluencerSuccess: (state, action) => {
      state.isFetching = false;
      state.Influencers.splice(
        state.Influencers.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteInfluencerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // UPDATE
    updateInfluencerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateInfluencerSuccess: (state, action) => {
      state.isFetching = false;
      state.Influencers[
        state.Influencers.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.Influencer;
    },
    updateInfluencerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // ADD
    addInfluencerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addInfluencerSuccess: (state, action) => {
      state.isFetching = false;
      state.Influencers.push(action.payload);
    },
    addInfluencerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //Clear Influencers
    clearInfluencers: (state) => {
      state.Influencers = [];
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const {
  getInfluencerStart,
  getInfluencerSuccess,
  getInfluencerFailure,
  deleteInfluencerStart,
  deleteInfluencerSuccess,
  deleteInfluencerFailure,
  updateInfluencerStart,
  updateInfluencerSuccess,
  updateInfluencerFailure,
  addInfluencerStart,
  addInfluencerSuccess,
  addInfluencerFailure,
  clearInfluencers,
} = InfluencerSlice.actions;

export default InfluencerSlice.reducer;
