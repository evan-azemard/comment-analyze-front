import React from "react";
import { Modal, Box, Paper, Typography } from "@mui/material";
import { IAuthModalProps } from "./AuthModal.props";
import { GoogleAuth } from "@molecules/GoogleAuth";

export const AuthModal: React.FC<IAuthModalProps> = ({ isAuthenticated, setIsAuthenticated }) => {
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
            Bienvenue 👋
          </Typography>
          <Typography variant="body1" id="auth-modal-description" marginBottom={3}>
            Veuillez vous connecter avec votre compte Google pour commencer à utiliser l'application.
          </Typography>
          <GoogleAuth setIsAuthenticated={setIsAuthenticated} />
        </Paper>
      </Box>
    </Modal>
  );
};
