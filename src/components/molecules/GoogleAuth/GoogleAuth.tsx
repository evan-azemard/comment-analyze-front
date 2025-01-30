import React, { useEffect, useState } from "react";
import { useAuthStore } from "@store/useAuthStore";
import { fetchYoutubeVideos } from "@api/fetchYoutubeVideosApi";
import "./GoogleAuth.css";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const GoogleAuth: React.FC = () => {
  const { login } = useAuthStore();
  const [googleAuth, setGoogleAuth] = useState<any>(null);

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
        const auth = window.google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: "https://www.googleapis.com/auth/youtube.readonly",
          callback: handleCredentialResponse,
        });

        setGoogleAuth(auth);

        window.google.accounts.id.renderButton(
          document.getElementById("google-login-button"),
          {
            theme: "filled_blue",  
            size: "large",         
            text: "continue_with", 
            shape: "pill",         
            locale: "fr"           
          }
        );
      }
    };

    loadGoogleScript();
  }, []);

  const handleCredentialResponse = async (response: any) => {
    const token = response.access_token;
    try {
      const userInfoRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const user = await userInfoRes.json();

      login(token, user.name, user.picture);

      const videos = await fetchYoutubeVideos(token);
      console.log("Vidéos récupérées :", videos);
    } catch (error) {
      console.error("Erreur lors de la récupération des vidéos :", error);
    }
  };

  const handleSignIn = () => {
    if (googleAuth) {
      googleAuth.requestAccessToken();
    } else {
      console.error("L'authentification Google n'est pas initialisée");
    }
  };

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
