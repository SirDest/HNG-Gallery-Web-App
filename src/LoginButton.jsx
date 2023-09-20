import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="btn border-none outline-none bg-green-400 text-[23px] hover:scale-110 font-semibold text-black w-[250px] h-[55px] flex items-center text-center justify-center place-content-center ease-in-out duration-300 mt-[200px] m-auto"
      onClick={() => {
        loginWithRedirect();
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;
