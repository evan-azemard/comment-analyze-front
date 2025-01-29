import React, { useEffect } from "react";
import { GoogleSignInButton } from "@atoms/GoogleSignInButton";
import { IGoogleAuth } from "./GoogleAuth.props";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const GoogleAuth: React.FC<IGoogleAuth> = ({ setIsAuthenticated }) => {
  useEffect(() => {
    const loadGoogleScript = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = initializeGoogleLogin;
      document.body.appendChild(script);
    };

    const initializeGoogleLogin = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(
          document.getElementById("google-login-button"),
          { theme: "outline", size: "large" }
        );
      }
    };

    const handleCredentialResponse = (response: any) => {
      console.log("Encoded JWT ID token:", response.credential);
      setIsAuthenticated(true);
    };

    loadGoogleScript();
  }, []);

  return <GoogleSignInButton />;
};
