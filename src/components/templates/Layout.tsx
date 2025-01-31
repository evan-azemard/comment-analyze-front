import { Box, Skeleton } from "@mui/material";
import { Header } from "@organisms/Header";
import { useAuthStore } from "@store/useAuthStore";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

const { isAuthenticated} = useAuthStore();
  return (
    <div>
      <Header />
      {!isAuthenticated && 
      (
        Array.from(new Array(5)).map((_, index) => (
          <Box key={index} component="li" sx={{ mb: 2 }}>
            <Skeleton variant="text" width={500} height={50} animation="wave" />
            <Skeleton variant="rectangular" animation="wave" width={300} height={50} />
          </Box>
        ))
      )}
      <main>{children}</main>
    </div>
  );
}