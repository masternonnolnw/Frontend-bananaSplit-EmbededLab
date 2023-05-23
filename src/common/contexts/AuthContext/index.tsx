import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

import { IAuthContext, IUser } from "./types";
import { getUserProfile } from "./user";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [user, setUser] = useState<IUser>({
    name: "",
    userId: ""
  });
  const [isReady, setIsReady] = useState(false);
  const isFetching = useRef(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const refreshContext = useCallback(async () => {
    if (isFetching.current) {
      return;
    }
    isFetching.current = true;

    const token = localStorage.getItem("token");
    if (token) {
      const userProfile = await getUserProfile({ token });
      if (!userProfile) {
        localStorage.clear();
        window.location.href = "/auth";
        return;
      }

      setUser(userProfile);
      setIsAuthenticated(true);
    }

    isFetching.current = false;
  }, []);

  useEffect(() => {
    const initializeContext = async () => {
      setIsReady(false);
      await refreshContext();
      setIsReady(true);
    };
    initializeContext();
  }, [refreshContext]);

  const value = useMemo(
    () => ({
      user,
      isReady,
      isAuthenticated
    }),
    [user, isReady, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
