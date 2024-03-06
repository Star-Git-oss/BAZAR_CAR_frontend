import { useState } from "react";
import { useDispatch } from "react-redux";
import SignInput from "../components/SignInput";
import { signin, signup } from "../action/user";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/joy/CircularProgress";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreaCuentaClick = () => {
    setLoading(true);
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
        .then((res) => {
          console.log(res);
          dispatch(
            signin({
              email: email,
              password: password,
            })
          )
            .then((res) => {
              localStorage.setItem("id", res.id);
              localStorage.setItem("isLogged", "true");
              localStorage.setItem("membership", res.membership);
              localStorage.setItem("token", res.token);
              localStorage.setItem("email", res.email);
              localStorage.setItem("tel", res.tel);
              localStorage.setItem("username", res.username);
              localStorage.setItem("whatsApp", res.whatsApp);
              localStorage.setItem("freetime", res.freetime);

              navigate("/vehicle");
            })
            .catch((err) => setLoading(false));
        })
        .catch((err) => {
          console.log(err);
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
    }
  };

  return (
    <>
      <FloatingWhatsApp
        accountName={"52 1 5616002085"}
        darkMode={true}
        allowEsc={true}
        avatar="./highLightTitle.png"
        statusMessage="Bienvenido a nuestro servicio."
        chatMessage="Hola, ¿en qué puedo ayudarle?"
        phoneNumber={"52 1 5616002085"}
        onSubmit={(event, formValue) => clickSubmit(event, formValue)}
      />
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
      <div className="bg-[url('./wallpaper.png')] w-full min-h-screen bg-fixed bg-cover bg-no-repeat bg-center flex justify-center py-4">
        <div className="bg-white/[0.6] w-5/6 h-fit flex justify-start flex-col lg:flex-row rounded-lg my-auto md:p-12 p-4">
          <div className="w-full lg:w-1/3 mr-4">
            <div className="ml-4 mb-4 lg:mb-60">
              <p className="w-full text-center lg:text-left text-lg md:text-xl lg:text-2xl text-sky-900 font-bold">
                INFORMACIÓN PERSONAL.
              </p>
              <p className="w-full text-center lg:text-left text-sm md:text-md lg:text-lg text-sky-800">
                Ingresa tus datos y whatsapp para que el cliente te localize
              </p>
            </div>
            <div className="ml-4 mb-4">
              <p className="w-full text-center lg:text-left text-lg md:text-xl lg:text-2xl text-sky-900 font-bold">
                Crea tu contraseña
              </p>
              <p className="w-full text-center lg:text-left text-sm md:text-md lg:text-lg text-sky-800">
                Regusta tu contraseña con la que ingresaras atu cuenta
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-around lg:gap-8 xl:gap-14">
            <SignInput
              label={"Correo Electronico*"}
              value={email}
              onChange={setEmail}
            />
            <SignInput
              label={"Nombre y apellido*"}
              value={username}
              onChange={setUsername}
            />
            <div className="lg:flex gap-2">
              <SignInput
                label={"WhatsApp*"}
                value={whatsApp}
                onChange={setWhatsApp}
              />
              <SignInput label={"Tel Directo"} value={tel} onChange={setTel} />
            </div>
            <SignInput
              label={"Contraseña*"}
              width={"w-full lg:w-1/2"}
              value={password}
              type="password"
              onChange={setPassword}
            />
            <SignInput
              label={"Confirma la contraseña*"}
              width={"w-full lg:w-1/2"}
              value={confirmPassword}
              type="password"
              onChange={setConfirmPassword}
            />
            <p className="text-sm text-sky-800 px-2 lg:text-left text-center">
              Al menos 6 caracteres
              <br />
              Al menos una mayúscula
            </p>
            <div className="w-full flex justify-end px-4 lg:px-0">
              <button
                className="w-full lg:w-1/2 h-[40px] bg-blue-700 rounded-md text-white"
                onClick={handleCreaCuentaClick}
              >
                <div className="w-full h-full flex justify-center items-center">
                  Crea Cuenta
                  <CircularProgress
                    size="sm"
                    style={{
                      visibility: loading ? "visible" : "hidden",
                      position: "absolute",
                      right: "50px",
                    }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
