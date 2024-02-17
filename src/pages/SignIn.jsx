import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleSignin, signin } from "../action/user";
import SignInput from "../components/SignInput";
import { useGoogleLogin } from "@react-oauth/google";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreaClick = () => {
    console.log("handleCreaClick");
    navigate("/signup");
  };
  const handleIniciarClick = () => {
    console.log("handleIniciarClick", email, password);
    dispatch(
      signin({
        email: email,
        password: password,
      })
    )
      .then((res) => {
        localStorage.setItem("id", res.id);
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("token", res.token);
        localStorage.setItem("email", res.email);
        localStorage.setItem("tel", res.tel);
        localStorage.setItem("username", res.username);
        localStorage.setItem("whatsApp", res.whatsApp);
        navigate("/vehicle");
      })
      .catch((err) => console.log("signin failed"));
  };
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      const access_token = codeResponse.access_token;
      console.log(access_token);
      dispatch(googleSignin(access_token))
        .then((res) => {
          console.log("googlein==>res.id", res.id);
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
      <div className="bg-white/[0.6] w-full h-[650px] max-w-[400px] max-h-[650px] px-4 flex flex-col justify-around items-center rounded-lg">
        {/* <img src="./logo1.png" className="w-4/5 h-auto mt-2" alt="logo" /> */}
        {/* <img src="./Logo.png" className="w-4/5 h-auto mt-2" alt="logo" /> */}
        <img src="./logo2.png" className="w-4/5 h-auto mt-2" alt="logo" />
        <p className="text-center -mt-2 sm:-mt-6">
          <span className="hidden sm:contents">Ingresa a tu cuenta <br /> oh{" "}</span>
          <span
            className="text-sky-500 font-bold cursor-pointer lg:text-lg"
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
        />
        <p className="w-full text-right text-sky-800 font-bold px-4 -mt-4 xs:mt-0">
          Olvide mi contraseña
        </p>
        <button
          className="w-4/5 h-[40px] bg-sky-700 rounded-md text-white"
          onClick={handleIniciarClick}
        >
          Iniciar sesión
        </button>
        <p className="w-full text-center text-sky-900 hidden sm:block">
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
            className="text-sky-500 font-bold underline underline-offset-2 cursor-pointer text-sm sm:text-md"
            onClick={handlePoliticsClick}
          >
            Política de privacidad o los términos
          </span>
          <span className="hidden sm:contents"> y </span>
          <span className="contents sm:hidden">
            <br />
          </span>
          <span
            className="text-sky-500 font-bold underline underline-offset-2 cursor-pointer text-sm sm:text-md"
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
