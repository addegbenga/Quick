import {
  LOADING,
  ADD_LINK,
  ADD_LINK_ERROR,
  EDIT_LINK_ERROR,
  EDIT_LINK,
  GET_LINK_BY_USER_ID,
  GET_LINK_BY_USER_ID_ERROR,
  GET_LINK,
  GET_LINK_ERROR,
} from "./types";
import { api } from "../utils/api";
import { toast } from "react-toastify";

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
    dispatch({
      type: LOADING,
    });
    const response = await api.post(`/v1/profile/edit`, body);
    dispatch({
      type: EDIT_LINK,
      payload: response.data,
    });

    if (body.published === true) {
      toast.success("Link Public");
    }
    if (body.published === false) {
      toast.success("Link Private");
    }
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

export const getAllLink_By_UserId = (id) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const response = await api.post(`/v1/profile/get_profile_by_userId`, id);
    dispatch({
      type: GET_LINK_BY_USER_ID,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_LINK_BY_USER_ID_ERROR,
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
    toast.error(error.message.data);
  }
};

export const deleteLinkAvatar = (body) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
    });
    const resp = await api.post("/v1/profile/deleteLinkAvatar", {
      linkAvatarId: body.linkAvatarId,
      linkId: body._id,
    });
    toast.success(resp.data);
    dispatch({
      type: "DELETE_LINK_IMG",
    });
  } catch (error) {
    dispatch({
      type: "DELETE_LINK_IMG_ERROR",
    });
  }
};
