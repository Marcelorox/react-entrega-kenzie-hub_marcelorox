import { createContext, useState, useEffect } from "react";
import { api } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("apiResponse");

      if (token && userId) {
        try {
          const { data } = await api.get(`/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          navigateTo("/dashboard");
        } catch (error) {
          localStorage.removeItem("token");
          localStorage.removeItem("apiResponse");
        }
      }
    };

    loadUser();
  }, []);

  const login = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("apiResponse", JSON.stringify(data.user.id));
      localStorage.setItem("token", data.token);
      toast.success("Logado com sucesso");
      navigateTo("/dashboard");
    } catch (error) {
      toast.error("Ops! algo deu errado");
    }
  };

  const registerContext = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      toast.success("Registrado com sucesso");
      navigateTo("/");
    } catch (error) {
      toast.error("Ops! algo deu errado");
    }
  };

  function clearStored() {
    localStorage.clear();
    toast.success("Deslogado com sucesso!");
    setUser(null);
    navigateTo("/");
  }

  return (
    <UserContext.Provider value={{ login, registerContext, user, clearStored }}>
      {children}
    </UserContext.Provider>
  );
};
