import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button, Typography } from "@mui/material";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
          404
        </Typography>
        <Typography color="text.secondary" sx={{ fontSize: "1.25rem", mb: 4 }}>
          Esta página no existe. El enlace puede estar roto o la página se ha movido.
        </Typography>
        <Button href="/" variant="contained" size="large">
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
