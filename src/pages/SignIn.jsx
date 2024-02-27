import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleSignin, signin } from "../action/user";
import SignInput from "../components/SignInput";
import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkSubscription } from "../action/stripe";
import CircularProgress from "@mui/joy/CircularProgress";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleCreaClick = () => {
    console.log("handleCreaClick");
    navigate("/signup");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleIniciarClick();
  };
  const handleIniciarClick = () => {
    console.log("handleIniciarClick", email, password);
    setLoading(true);
    dispatch(
      signin({
        email: email,
        password: password,
      })
    )
      .then((res) => {
        let email = res.email;
        localStorage.setItem("id", res.id);
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("membership", res.membership);
        localStorage.setItem("token", res.token);
        localStorage.setItem("email", res.email);
        localStorage.setItem("tel", res.tel);
        localStorage.setItem("username", res.username);
        localStorage.setItem("whatsApp", res.whatsApp);
        localStorage.setItem("freetime", res.freetime);

        dispatch(checkSubscription({ email }))
          .then((res) => {
            localStorage.setItem("membership", res.status);
            navigate("/vehicle");
          })
          .catch((err) => setLoading(false));
      })
      .catch((err) => {
        toast.error("Error. Confirme su correo electrónico o contraseña.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "colored",
          draggable: true,
        });
        setLoading(false);
      });
  };
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      const access_token = codeResponse.access_token;
      console.log(access_token);
      dispatch(googleSignin(access_token))
        .then((res) => {
          let email = res.email;
          localStorage.setItem("id", res.id);
          localStorage.setItem("isLogged", "true");
          localStorage.setItem("membership", res.membership);
          localStorage.setItem("token", res.token);
          localStorage.setItem("email", res.email);
          localStorage.setItem("tel", res.tel);
          localStorage.setItem("username", res.username);
          localStorage.setItem("whatsApp", res.whatsApp);
          localStorage.setItem("freetime", res.freetime);

          dispatch(checkSubscription({ email }))
            .then((res) => localStorage.setItem("membership", res.status))
            .catch((err) => console.log(res.status));

          navigate("/vehicle");
        })
        .catch((err) => console.log(err));
    },
    onError: (error) => {
      alert("Invalid gmail");
    },
    scope: "email profile ",
  });
  const handlePoliticsClick = () => {
    console.log("handlePoliticsClick");
  };
  const handleTerminosClick = () => {
    console.log("handleTerminosClick");
  };

  return (
    <div className="bg-[url('./wallpaper.png')] w-full min-h-screen py-4 bg-no-repeat bg-cover bg-center flex justify-center items-center">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <div className="bg-white/[0.6] w-full h-[650px] max-w-[400px] max-h-[650px] px-4 flex flex-col justify-around items-center rounded-lg">
        {/* <img src="./logo1.png" className="w-4/5 h-auto mt-2" alt="logo" /> */}
        {/* <img src="./Logo.png" className="w-4/5 h-auto mt-2" alt="logo" /> */}
        <img
          src="./Logo bazar 1.png"
          className="w-4/5 h-auto mt-2"
          alt="logo"
        />
        <p className="text-center -mt-2 sm:-mt-6">
          <span className="hidden sm:contents">
            Ingresa a tu cuenta <br /> oh{" "}
          </span>
          <span
            className="text-blue-500 font-bold cursor-pointer lg:text-lg"
            onClick={handleCreaClick}
          >
            crea una cuenta nueva
          </span>
        </p>
        <SignInput
          label="Correo Electronico *"
          value={email}
          onChange={setEmail}
        />
        <SignInput
          label="Contraseña*"
          value={password}
          type="password"
          style={"-mt-6 sm:mt-0"}
          onChange={setPassword}
          onKeyDown={handleKeyDown}
        />
        <p className="w-full text-right text-blue-800 font-bold px-4 -mt-4 xs:mt-0">
          Olvide mi contraseña
        </p>
        <button
          className="w-4/5 h-[40px] bg-blue-700 hover:bg-blue-500 transition-colors duration-300 ease-in-out rounded-md text-white"
          onClick={handleIniciarClick}
        >
          <div className="w-full h-full flex justify-center items-center">
            Iniciar sesión
            <CircularProgress size="sm" style={{visibility: loading ? "visible" : "hidden", position:"absolute", right:"50px"}} />
          </div>
        </button>
        <p className="w-full text-center text-blue-900 hidden sm:block">
          --------------o iniciar con -------------
        </p>
        <button onClick={() => login()}>
          <img
            src="google-icon.png"
            alt="google"
            className="w-[30px] h-[30px]"
          />
        </button>
        <p className="text-center w-[300px] px-3 text-blue-800 text-md">
          <span className="hidden sm:contents">
            Al usar tu cuenta o registrarte, aceptas la{" "}
          </span>
          <span
            className="text-blue-500 font-bold underline underline-offset-2 cursor-pointer text-sm sm:text-md"
            onClick={handlePoliticsClick}
          >
            Política de privacidad o los términos
          </span>
          <span className="hidden sm:contents"> y </span>
          <span className="contents sm:hidden">
            <br />
          </span>
          <span
            className="text-blue-500 font-bold underline underline-offset-2 cursor-pointer text-sm sm:text-md"
            onClick={handleTerminosClick}
          >
            Terminos y condiciones del sitio
          </span>
        </p>
      </div>
    </div>
  );
};
export default SignIn;
