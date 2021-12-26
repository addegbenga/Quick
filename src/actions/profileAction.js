import {
  LOADING,
  ADD_LINK,
  ADD_LINK_ERROR,
  EDIT_LINK_ERROR,
  EDIT_LINK,
  GET_LINK,
  GET_LINK_ERROR,
} from "./types";
import { api } from "../utils/api";

export const addLink = (body) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const response = await api.post(`/v1/profile/create`);
    dispatch({
      type: ADD_LINK,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_LINK_ERROR,
      payload: error.response.data,
    });
  }
};

export const editLink = (body) => async (dispatch) => {
  try {
    const response = await api.post(`/v1/profile/edit`, body);
    dispatch({
      type: EDIT_LINK,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_LINK_ERROR,
      payload: error.response.data,
    });
  }
};

export const getAllLink = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const response = await api.get(`/v1/profile/get_profile`);
    dispatch({
      type: GET_LINK,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_LINK_ERROR,
      payload: error.response.data,
    });
  }
};

export const deleteProfile = (body) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const response = await api.delete(`/v1/profile/delete`, {
      data: { id: body.id },
    });
    dispatch({
      type: "DELETE_PROFILE",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PROFILE_ERROR",
    });
  }
};
