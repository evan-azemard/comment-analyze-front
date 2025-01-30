import React from "react";
import { Modal, Box, Paper, Typography } from "@mui/material";
import { GoogleAuth } from "@molecules/GoogleAuth";
import { useAuthStore } from "@store/useAuthStore";

export const AuthModal: React.FC = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Modal open={!isAuthenticated} aria-labelledby="auth-modal-title" aria-describedby="auth-modal-description">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: 400,
            padding: 4,
            borderRadius: 3,
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" id="auth-modal-title" fontWeight="bold" gutterBottom>
           "Bienvenue 👋"
          </Typography>
          <Typography variant="body1" id="auth-modal-description" marginBottom={3}>
            Veuillez vous connecter avec votre compte Google pour commencer à utiliser l'application.
          </Typography>
          <GoogleAuth />
        </Paper>
      </Box>
    </Modal>
  );
};
