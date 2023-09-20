import React from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Images from "./Images";

const Display = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="flex flex-col">
      {!isLoading && !user && <LoginButton />}
      {!isLoading && user && <LogoutButton />}
      {isAuthenticated && <Images />}
    </div>
  );
};

export default Display;
