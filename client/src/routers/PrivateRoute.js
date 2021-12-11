import { useEffect } from "react";
import { Navigate, Route } from "react-router-dom";
import { message } from "antd";

const PrivateRoute = ({
  path,
  component: Component,
  check,
  redirectPath,
  message: msg,
}) => {
  useEffect(() => {
    if (!check && msg) {
      message.warning(msg);
    }
  }, [check, msg]);
  return (
    <Route
      path={path}
      element={check ? <Component /> : <Navigate to={redirectPath} />}
    />
  );
};

export default PrivateRoute;
