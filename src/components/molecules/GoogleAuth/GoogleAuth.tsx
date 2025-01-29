import React, { useEffect } from "react";
import { GoogleSignInButton } from "@atoms/GoogleSignInButton";
import { IGoogleAuth } from "./GoogleAuth.props";

const CLIENT_ID = "293828265303-84s7hb7qjt5ih7mvkbesq9fm1rnc3rjb.apps.googleusercontent.com";

export const GoogleAuth: React.FC<IGoogleAuth> = ({ setIsAuthenticated }) => {
  useEffect(() => {
    // Charger le script Google
    const loadGoogleScript = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.onload = initializeGoogleLogin;
      document.body.appendChild(script);
    };

    // Initialisation de Google Login
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

    // Callback Google
    const handleCredentialResponse = (response: any) => {
      console.log("Encoded JWT ID token:", response.credential);
      setIsAuthenticated(true);
    };

    loadGoogleScript();
  }, []);

  return <GoogleSignInButton />;
};
