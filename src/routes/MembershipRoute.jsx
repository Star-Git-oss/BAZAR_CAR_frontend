import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCredentials, logout } from "../slices/authSlice";

import axios from "axios";
import { checkSubscription } from "../action/stripe";

const MembershipRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   let status = "";
  const [status, setStatus] = useState();
  useEffect(() => {
    const email = localStorage.getItem("email");
    dispatch(checkSubscription({ email }))
      .then((res) => {
        alert(res.status);
        if (res.status === "active") {
          return <Outlet />;
        } else {
          return <Navigate to="/" replace />;
        }
        // setStatus(res.status);
      })
      .catch((err) => alert(err));
  }, []);

  //   if (status === "active") {
  //     return <Outlet />;
  //   } else {
  //     return <Navigate to="/" replace />;
  //   }
};

export default MembershipRoute;
