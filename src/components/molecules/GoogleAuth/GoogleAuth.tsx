import React from "react";
import "./GoogleAuth.css";
import { useGoogleAuth } from "@hooks/googleAuth";


export const GoogleAuth: React.FC = () => {

  const { handleSignIn } = useGoogleAuth();

  return (
    <div>
      <button
        id="google-login-buttons"
        onClick={handleSignIn}
        className="google-button">
        Se connecter avec Google
      </button>
    </div>
  );
};
