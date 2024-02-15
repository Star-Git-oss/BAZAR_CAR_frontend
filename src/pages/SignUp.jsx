import { useState } from "react";
import { useDispatch } from "react-redux";
import SignInput from "../component/SignInput";
import { signup } from "../action/user";

const SignUp = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCreaCuentaClick = () => {
    console.log("handleCreaCuentaClick");
    if (password === confirmPassword) {
      dispatch(
        signup({
          email: email,
          username: username,
          whatsApp: whatsApp,
          tel: tel,
          password: password,
        })
      )
        .then((res) => {})
        .catch((err) => {});
    }
  };

  return (
    <div className="bg-[url('./wallpaper.png')] w-full md:h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <div className="bg-white w-5/6 max-w-[1400px] flex justify-start flex-col md:flex-row rounded-lg my-4 p-4">
        <div className="w-full md:w-1/3 mr-4">
          <div className="ml-4 mb-4 md:mb-60">
            <p className="w-full text-center lg:text-left text-2xl text-sky-950 font-bold">
              INFORMACIÓN PERSONAL.
            </p>
            <p className="w-full text-center lg:text-left text-md text-sky-800">
              Ingresa tus datos y whatsapp para que el cliente te localize
            </p>
          </div>
          <div className="ml-4 mb-4">
            <p className="w-full text-center lg:text-left text-2xl text-sky-950 font-bold">
              Crea tu contraseña
            </p>
            <p className="w-full text-center lg:text-left text-md text-sky-800">
              Regusta tu contraseña con la que ingresaras atu cuenta
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-around lg:gap-8 xl:gap-14">
          <SignInput label={"Correo Electronico*"} value={email} onChange={setEmail} />
          <SignInput
            label={"Nombre y apellido*"}
            value={username}
            onChange={setUsername}
          />
          <div className="md:flex gap-2">
            <SignInput
              label={"WhatsApp*"}
              value={whatsApp}
              onChange={setWhatsApp}
            />
            <SignInput label={"Tel Directo"} value={tel} onChange={setTel} />
          </div>
          <SignInput
            label={"Contraseña*"}
            width={"w-full md:w-1/2"}
            value={password}
            onChange={setPassword}
          />
          <SignInput
            label={"Confirma la contraseña*"}
            width={"w-full md:w-1/2"}
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          <p className="text-sm text-sky-800 px-2 md:text-left text-center">
            Al menos 6 caracteres
            <br />
            Al menos una mayúscula
          </p>
          <div className="w-full flex justify-end px-4 md:px-0">
            <button
              className="w-full md:w-1/2 h-[40px] bg-sky-700 rounded-md text-white"
              onClick={handleCreaCuentaClick}
            >
              Crea Cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
