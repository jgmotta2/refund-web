import { createContext, use, useEffect, useState, type ReactNode } from "react";
import { api } from "../services/api";

type AuthContext = {
  session: null | UserAPIresponse;
  isLoading: boolean;
  save: (data: UserAPIresponse) => void;
  remove: () => void;
};

const LOCAL_STORAGE_KEY = "@refund";

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<null | UserAPIresponse>(null);
  const [isLoading, setIsLoading] = useState(true);

  function save(data: UserAPIresponse) {
    localStorage.setItem(
      `${LOCAL_STORAGE_KEY}:user`,
      JSON.stringify(data.user),
    );

    localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token);

    api.defaults.headers.common["Authorization"] = `Bearer: ${data.token}`;

    setSession(data);
  }

  function remove() {
    setSession(null);
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:token`);
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:user`);

    window.location.assign("/");
  }

  function loadUser() {
    const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`);
    const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`);

    if (token && user) {
      setSession({
        token,
        user: JSON.parse(user),
      });
    }

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setIsLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ session, save, isLoading, remove }}>
      {children}
    </AuthContext.Provider>
  );
}
