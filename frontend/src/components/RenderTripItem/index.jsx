import React, { useEffect, useState } from "react";
import TripItem from "./../TripItem/TripItem";
import { useIsLogin } from "./../../hooks/useIsLogin";
import SkeletonTripItem from "../SkeletonCard/SkeletonTripItem";
import { useDispatch } from "react-redux";
import { getListTrip } from "../../store/actions/user.action";
export default function RenderTripItem() {
  // const [totalPage, setTotalPage] = useState(0);
  // useEffect(() => {
  //   const getUserList = () => {
  //     fetch(`${process.env.REACT_APP_API_URL}/api/trips?size=9`)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setTotalPage(res.total);
  //       });
  //   };
  //   getUserList();
  //   // eslint-disable-next-line
  // }, []);
  // console.log("🚀 ==", totalPage);
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  console.log("🚀 ", page);
  const [userList, setUserList] = useState([]);
  console.log(
    "🚀 ~ file: index.jsx ~ line 26 ~ RenderTripItem ~ userList",
    userList
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(
      getListTrip(page, userList, setUserList, setTotalPages, setLoading)
    );
    // eslint-disable-next-line
  }, [page]);
  const { isLogin } = useIsLogin();
  return userList.length === 0 ? (
    <div className="w_cw">
      <div className="w_cW w_cX ">
        {isLogin && <label className="w_rI w_rT">New Trips</label>}
        <div className="w_cx">
          <SkeletonTripItem />
        </div>
      </div>
    </div>
  ) : (
    <div className="w_cw">
      <div className="w_cW w_cX ">
        {isLogin && <label className="w_rI w_rT">New Trips</label>}
        <div className="w_cx">
          {userList
            .sort(function (a, b) {
              return b.visitDays.length - a.visitDays.length;
            })
            .map((listTrip, index) => (
              <TripItem listTrip={listTrip} key={index} />
            ))}
        </div>
        {isLogin && (
          <div className="w_i-" style={{ justifyContent: "center" }}>
            {loading ? (
              <button
                disabled
                className="w_ih w_ik w_cy"
                style={{ width: "auto" }}
              >
                <span className="w_ia">Load More</span>
                <div className="loadingio-spinner-ripple-ormwzc5m72e">
                  <div className="ldio-gw2gg1659v">
                    <div />
                    <div />
                  </div>
                </div>
              </button>
            ) : (
              <>
                {totalPages !== page && (
                  <button
                    onClick={() => setPage(page + 1, setLoading(true))}
                    className="w_ih w_ik w_cy"
                    style={{ width: "auto" }}
                  >
                    <span className="w_ia">Load More</span>
                  </button>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
