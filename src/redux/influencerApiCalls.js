import { publicRequest, userRequest } from "../utils/requestMethods";
import {
  getInfluencerFailure,
  getInfluencerStart,
  getInfluencerSuccess,
  deleteInfluencerFailure,
  deleteInfluencerStart,
  deleteInfluencerSuccess,
  updateInfluencerFailure,
  updateInfluencerStart,
  updateInfluencerSuccess,
  addInfluencerFailure,
  addInfluencerStart,
  addInfluencerSuccess,
} from "./influencerRedux";

export const getInfluencers = async (dispatch) => {
  dispatch(getInfluencerStart());

  try {
    const res = await publicRequest.get("/influencer");
    dispatch(getInfluencerSuccess(res.data));
  } catch (err) {
    dispatch(getInfluencerFailure());
  }
};

export const deleteInfluencer = async (id, dispatch) => {
  dispatch(deleteInfluencerStart());

  try {
    //Undo Comment Below to connect Influencer List Page to DB
    const res = await userRequest.delete(`/influencer/${id}`);
    console.log(res.data);
    dispatch(deleteInfluencerSuccess(id));
  } catch (err) {
    dispatch(deleteInfluencerFailure());
  }
};

export const updateInfluencer = async (id, influencer, dispatch) => {
  dispatch(updateInfluencerStart());

  try {
    const res = await userRequest.put(`/influencer/${id}`, influencer);
    dispatch(updateInfluencerSuccess(res.data));
  } catch (err) {
    dispatch(updateInfluencerFailure());
  }
};

export const addInfluencer = async (influencer, dispatch) => {
  dispatch(addInfluencerStart());

  try {
    const res = await userRequest.post(`/influencer/`, influencer);
    dispatch(addInfluencerSuccess(res.data));
  } catch (err) {
    dispatch(addInfluencerFailure());
  }
};
