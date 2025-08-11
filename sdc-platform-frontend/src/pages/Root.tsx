import { NextUIProvider } from "@nextui-org/react";
import { Outlet, useHref, useNavigate } from "react-router-dom";
import { AuthProvider } from "src/auth/AuthContext";
import ThemeProvider from "src/components/Theme/Provider";

const Root = () => {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <ThemeProvider>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
};

export default Root;
