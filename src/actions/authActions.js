import { api } from "../utils/api";
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../actions/types";
const API_URL = "http://localhost:5000/v1/auth";

export const registerUser = (body) => async (dispatch) => {
  try {
    const response = await api.post(`${API_URL}/register`, body);
    dispatch({
      type: REGISTER_USER,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (body) => async (dispatch) => {
  try {
    const response = await api.post(`${API_URL}/login`, body);
    dispatch({
      type: LOGIN_USER,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = (body) => async (dispatch) => {
  try {
    const response = await api.post(`${API_URL}/logout`, body);
    dispatch({
      type: LOGOUT_USER,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};
