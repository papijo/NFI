import { publicRequest, userRequest } from "../utils/requestMethods";
import {
  getModelFailure,
  getModelStart,
  getModelSuccess,
  deleteModelFailure,
  deleteModelStart,
  deleteModelSuccess,
  updateModelFailure,
  updateModelStart,
  updateModelSuccess,
  addModelFailure,
  addModelStart,
  addModelSuccess,
} from "./modelRedux";

export const getModels = async (dispatch) => {
  dispatch(getModelStart());

  try {
    const res = await publicRequest.get("/model");
    dispatch(getModelSuccess(res.data));
  } catch (err) {
    dispatch(getModelFailure());
  }
};

export const deleteModel = async (id, dispatch) => {
  dispatch(deleteModelStart());

  try {
    //Undo Comment Below to connect Model List Page to DB
    const res = await userRequest.delete(`/model/${id}`);
    console.log(res.data);
    dispatch(deleteModelSuccess(id));
  } catch (err) {
    dispatch(deleteModelFailure());
    console.log(err);
  }
};

export const updateModel = async (id, model, dispatch) => {
  dispatch(updateModelStart());
  try {
    const res = await userRequest.put(`/model/${id}`, model);
    dispatch(updateModelSuccess(res.data));
  } catch (err) {
    dispatch(updateModelFailure());
  }
};

export const addModel = async (model, dispatch) => {
  dispatch(addModelStart());

  try {
    const res = await userRequest.post(`/model/`, model);
    dispatch(addModelSuccess(res.data));
  } catch (err) {
    dispatch(addModelFailure());
  }
};
