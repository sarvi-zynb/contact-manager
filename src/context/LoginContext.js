import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext({
  isLogin: false,
  handleLogin: () => {},
  handleLogout: () => {},
  handleRegister: () => {},
});

export const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (user) => {
    await axios
      .post("http://localhost:8000/user", JSON.stringify(user))
      .then((result) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = async (user) => {
    axios
      .post("http://localhost:8000/user", user)
      .finally((res) => {
        const token = "SHJDfjinvnEoifjpoAJSJFxfAS";
        localStorage.setItem("token", token);
        setIsLogin(true);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    setIsLogin(false);
    navigate("/login");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <LoginContext.Provider
      value={{ isLogin, handleLogin, handleLogout, handleRegister }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  return useContext(LoginContext);
};
