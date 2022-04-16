import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutUser,
} from "./userRedux";

import { publicRequest } from "../utils/requestMethods";
import { clearInfluencers } from "./influencerRedux";
import { clearModels } from "./modelRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch, user, model, influencer) => {
  try {
    const res = await publicRequest.post("/auth/logout", user);
    dispatch(logoutUser(res.data));
    dispatch(clearInfluencers(model));
    dispatch(clearModels(influencer));
  } catch (err) {}
};
