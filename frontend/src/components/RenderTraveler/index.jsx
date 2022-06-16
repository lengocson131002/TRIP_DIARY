import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../store/actions/user.action";
import Traveler from "./../Traveller/traveler";
import { useIsLogin } from "./../../hooks/useIsLogin";
import SkeletonTraveler from "../SkeletonCard/SkeletonTraveler";

export default function RenderTraveler() {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(getListUser());
    },
    // eslint-disable-next-line
    []
  );
  const { listUser } = useSelector((state) => state.user);
  const { loading } = useIsLogin();
  return loading ? (
    <SkeletonTraveler />
  ) : (
    listUser.map((listUser, index) => {
      return <Traveler listUser={listUser} key={index} />;
    })
  );
}