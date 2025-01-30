import React, { useEffect } from "react";
import { GoogleSignInButton } from "@atoms/GoogleSignInButton";
import { useAuthStore } from "@store/useAuthStore";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const GoogleAuth: React.FC = () => {
  const login = useAuthStore((state) => state.login)

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
          { theme: "filled_blue", size: "large", shape: "pill", }
        );
      }
    };

    const handleCredentialResponse = (response: any) => {
      const token = response.credential;

      const user = JSON.parse(atob(token.split(".")[1]));

      login(token, user.name, user.picture);

      console.log("Utilisateur connecté :", user);
    };

    loadGoogleScript();
  }, []);

  return <GoogleSignInButton />;
};
