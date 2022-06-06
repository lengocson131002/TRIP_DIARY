import axios from "axios";
import { NotificationManager } from "react-notifications";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
  RESETPASSWORD_FAILED,
  RESETPASSWORD_SUCCESS,
} from "../constants/user.const";
import { startLoading, stopLoading } from "../actions/common.action";
export const postLogin = (usernameOrEmail, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: "https://trip-diary-backend.herokuapp.com/api/auth/signin",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        usernameOrEmail,
        password,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(postLoginSuccess(res.data));
        localStorage.setItem("userLogin", JSON.stringify(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postLoginFailed(err));
        NotificationManager.error(err.response.data.message);
      });
  };
};

export const postLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

const postLoginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err,
  };
};
export const postRegistration = (values, goBack) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: "https://trip-diary-backend.herokuapp.com/api/auth/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: values.email,
        username: values.username,
        password: values.password,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(postRegistrationSuccess(res.data));
        goBack.push("/login");
        NotificationManager.success(res.data.message);
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postRegistrationFailed(err));
        NotificationManager.error(err.response.data.message);
      });
  };
};

const postRegistrationSuccess = (user) => {
  return {
    type: REGISTRATION_SUCCESS,
    payload: user,
  };
};

const postRegistrationFailed = (err) => {
  return {
    type: REGISTRATION_FAILED,
    payload: err,
  };
};
export const postResetPassword = (forgotPassword, goBack) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: "https://trip-diary-backend.herokuapp.com/api/auth/reset-password",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        forgotPassword,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(postResetPasswordSuccess(res.data));
        goBack.push("/login");
        NotificationManager.success(res.data.message);
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postResetPasswordFailed(err));
        NotificationManager.error(err.response.data.message);
      });
  };
};

export const postResetPasswordSuccess = (user) => {
  return {
    type: RESETPASSWORD_SUCCESS,
    payload: user,
  };
};

const postResetPasswordFailed = (err) => {
  return {
    type: RESETPASSWORD_FAILED,
    payload: err,
  };
};
