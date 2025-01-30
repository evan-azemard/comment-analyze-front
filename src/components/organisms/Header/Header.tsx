import { Typography } from "@mui/material";
import { NavBar } from "@organisms/NavBar";
import "./Header.css";
export const Header: React.FC = () => {

  return (
    <header
      className="header-flex">
      <Typography variant="h4" component="h1">COMMENT ANALYZER</Typography>
      <NavBar />
    </header>
  );
}