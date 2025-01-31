import { useAuthStore } from "@store/useAuthStore";
import { useEffect, useState } from "react";
import { useFetchUserInfo } from "./queries";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const useGoogleAuth = () => {
    const { login } = useAuthStore();
    const [googleAuth, setGoogleAuth] = useState<any>(null);
    const [token, setToken] = useState<string | null>(null);
  
    const { data: userInfo } = useFetchUserInfo(token || "");
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
            scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly",
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
  
    useEffect(() => {
      if (token && userInfo) {
        login(token, userInfo.name, userInfo.picture);
      }
    }, [token, userInfo]);
    
  
    const handleCredentialResponse = (response: any) => {
      setToken(response.access_token);
    };
  
  
    const handleSignIn = () => {
      if (googleAuth) {
        googleAuth.requestAccessToken();
      } else {
        console.error("L'authentification Google n'est pas initialisée");
      }
    };

    return { handleSignIn };

}

declare global {
  interface Window {
    google: any;
  }
}
