import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Userinfo from "src/api/models/Userinfo";
import { getUserinfo, getUserPermissions } from "src/auth/ApiUser";

import GlobalPermissions from "src/api/models/GlobalPermissions.ts";
import { BACKEND_BASENAME, BASENAME } from "src/constants";

interface AuthProps {
  authenticated: boolean;
  user?: Userinfo;
  permissions?: GlobalPermissions;
  login: () => void;
  restartSession: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthProps>({
  authenticated: false,
  user: undefined,
  permissions: undefined,
  login: () => {},
  restartSession: () => {},
  logout: () => {},
});

const AuthProvider = (props: { children: ReactNode }) => {
  const [state, setState] = useState<{
    authenticated: boolean;
    user?: Userinfo;
    permissions?: GlobalPermissions;
  }>({
    authenticated: false,
    user: undefined,
    permissions: undefined,
  });

  // Check login on mount
  useEffect(() => {
    const controller = new AbortController();

    getUserinfo(controller.signal)
      .then((user) => {
        setState((prev) => ({ ...prev, authenticated: Boolean(user), user: user }));
      })
      .catch((err) => {
        if (!(err instanceof DOMException)) {
          console.error(err);
        }
      });

    getUserPermissions(controller.signal)
      .then((permissions) => {
        setState((prev) => ({ ...prev, permissions: permissions }));
      })
      .catch((err) => {
        if (!(err instanceof DOMException)) {
          console.error(err);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  // Use location to "continue where you left off"
  const { pathname } = useLocation();

  const value = useMemo(() => {
    const currentLocation = `${BASENAME}${pathname}`;

    function login() {
      window.location.assign(`${BACKEND_BASENAME}/oauth2/start?rd=${encodeURIComponent(currentLocation)}`);
    }

    function logout() {
      window.location.assign(`${BACKEND_BASENAME}/oauth2/sign_out?rd=${encodeURIComponent(currentLocation)}`);
    }

    function restartSession() {
      const restartLocation = `${BASENAME}/redirect${currentLocation}`;
      window.location.assign(`${BACKEND_BASENAME}/oauth2/sign_out?rd=${encodeURIComponent(restartLocation)}`);
    }

    return {
      authenticated: state.authenticated,
      user: state.user,
      permissions: state.permissions,
      login: login,
      logout: logout,
      restartSession: restartSession,
    };
  }, [state, pathname]);

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider, type AuthProps };
