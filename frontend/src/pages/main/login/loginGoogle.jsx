import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import styles from "./login.module.css";
import { useDispatch } from "react-redux";
import { postLoginSuccess } from "../../../store/actions/user.action";
import { gapi } from "gapi-script";
import { useIsLogin } from "./../../../hooks/useIsLogin";

const clientId =
  "874015971178-0461l5tlksvspu487u08779128bn5rn7.apps.googleusercontent.com";
export default function LoginGoogle() {
  const dispatch = useDispatch();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
  const onSuccess = async (res) => {
    console.log(res);
    let jwtToken = await axios.post(
      `${process.env.REACT_APP_API_URL}/oauth2/jwt/google`,
      JSON.stringify(res),
      config
    );
    console.log(res);
    if (jwtToken.status === 200) {
      localStorage.setItem("userLogin", JSON.stringify(jwtToken.data));
    }
    console.log("OK");
    dispatch(postLoginSuccess(jwtToken.data));
  };
  const onFailure = (res) => {
    console.log("onFailure", res);
  };
  const { loading } = useIsLogin();
  console.log(
    "🚀 ~ file: loginGoogle.jsx ~ line 46 ~ LoginGoogle ~ loading",
    loading
  );
  return (
    <GoogleLogin
      render={(renderProps) => (
        <button
          style={{ background: "#c73534", marginBottom: "16px", color: "#fff" }}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <div className={styles.icons}>
            <img
              src="fonts/src_app_components_components_svgIcon_icons_commonsprite-afce76.svg#socials-googlebS-usage"
              alt="common/socials-google"
            />
          </div>
          <div>
            <span>With Google</span>
          </div>
        </button>
      )}
      buttonText="Login"
      clientId={clientId}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
}
