import React from "react";

import AuthContext from "../context/auth";

import AuthRoutes from "./auth.routes";
import ComercianteRoutes from "./comerciante.routes";
import ConsumidorRoutes from "./consumidor.routes";

const Routes = () => {
  const { user } = React.useContext(AuthContext);

  return user ? (
    user.tipo === "Comerciante" ? (
      <ComercianteRoutes />
    ) : user.tipo === "Consumidor" ? (
      <ConsumidorRoutes />
    ) : (
      <AuthRoutes />
    )
  ) : (
    <AuthRoutes />
  );
};

export default Routes;
