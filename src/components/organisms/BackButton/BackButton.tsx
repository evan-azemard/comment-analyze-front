import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleBack} variant="contained" color="primary">
      Retour
    </Button>
  );
};

export default BackButton;
