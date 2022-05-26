import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
} from "../constants/user.const";
import { startLoading, stopLoading } from "../actions/common.action";
export const postLogin = (taiKhoan, matKhau) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: {
        taiKhoan,
        matKhau,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        dispatch(postLoginSuccess(res.data));
        alert("Account or password is ok!");
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postLoginFailed(err));
        alert("Account or password is wrong!");
      });
  };
};

const postLoginSuccess = (user) => {
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
export const postRegistration = (taiKhoan, matKhau) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: "",
      data: {
        taiKhoan,
        matKhau,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(postRegistrationSuccess(res.data));
        alert("Account or password is ok!");
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postRegistrationFailed(err));
        alert("Account or password is wrong!");
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
