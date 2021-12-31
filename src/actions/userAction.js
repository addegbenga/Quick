import {
    LOADING,
    GET_USER,
    GET_USER_ERROR

  } from "./types";
  import { api } from "../utils/api";



export const getUser = (params) => async (dispatch) => {
  console.log(params)
    try {
      dispatch({
        type: LOADING,
      });
      const response = await api.get(`/v1/user/${params}`);
      dispatch({
        type: GET_USER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_USER_ERROR,
        payload: error.response.data,
      });
    }
  };