import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../Reducer/auth-reducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AutoContext = createContext(null);
const AuthProvider = ({ children }) => {
    const navigate=useNavigate()
    const [authState, authDispatch] = useReducer(authReducer, {
    token: "",
    user: "",
    loading: false,
  });

  const loginUser = async (user) => {
    try {
      authDispatch({ type: "SET_LOADING", payload: true });
      const { data } = await axios.post("api/auth/login", {
        email: user.email,
        password: user.password,
      });

      authDispatch({ type: "SET_LOADING", payload: false });
      const { foundUser, encodedToken } = data;
      authDispatch({ type: "SET_TOKEN", payload: encodedToken });
      authDispatch({ type: "SET_USER", payload: foundUser });
      localStorage.setItem(
        "user",
        JSON.stringify({
          userName: foundUser,
          token: encodedToken,
        })
      );
      navigate('/products')
    } catch (error) {
      console.log(error);
    }
  };

  const signupUser=async(user)=>{
    try{
        const {data}=await axios.post('/api/auth/signup',{
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            newPassword: user.newPassword,
            confirmPassword:user.confirmPassword
        })
        localStorage.setItem('user',JSON.stringify(data))
        const {foundUser,encodedToken}=data
        authDispatch({type:"SET_TOKEN",payload:encodedToken})
        authDispatch({type:"SET_USER",payload:foundUser})
        localStorage.setItem("user",JSON.stringify({
            userName:foundUser,
            token:encodedToken
        }))
        navigate('/products')

    }catch(error){
      console.log(error)
    }
  }


  const logoutAuth=()=>{
    localStorage.removeItem("user")
    authDispatch({type:"SET_LOADING",payload:true})
    setTimeout(()=>{
      authDispatch({type:"SET_TOKEN",payload:""})
      authDispatch({type:"SET_LOADING",payload:false})
      navigate("/login")
    },3000)
  }

  useEffect(() => {
    const user = localStorage.getItem("user");

    user?.token && authDispatch({ type: "SET_TOKEN", payload: user.token });

    user?.userName &&
      authDispatch({ type: "SET_USER", payload: user.userName });
  }, []);
  return (
    <AutoContext.Provider value={{ authState, authDispatch, loginUser,signupUser,logoutAuth }}>
      {children}
    </AutoContext.Provider>
  );
};

const useAuth = () => useContext(AutoContext);

export { useAuth, AuthProvider };
