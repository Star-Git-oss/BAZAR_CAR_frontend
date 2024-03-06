import { useEffect, useState } from "react";
import Cell from "../components/Cell";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  checkSubscription,
  createCustomer,
  createSubscription,
} from "../action/stripe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const System = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCancelOnClick = () => {
    dispatch(checkSubscription({ email }))
      .then((res) => {
        console.log(res.status);
        localStorage.setItem("membership", res.status);
        navigate("/");
      })
      .catch((err) => console.log(res.status));
    navigate("/");
  };
  useEffect(() => {
    let storageEmail = localStorage.getItem("email");
    let username = localStorage.getItem("username");
    setEmail(storageEmail);
    setName(username);
    toast.warning("Para más información, utilice la función de pertenencia.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
      draggable: true,
    });
  }, []);
  const smallMesOnClick = (amount) => {
    let response = {};
    dispatch(createCustomer({ email, name }))
      .then((res) => {
        response = res;
        toast.info("Por favor, espere un segundo.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "colored",
          draggable: true,
        });
        dispatch(
          createSubscription({
            email,
            customerId: response.id,
            priceAmount: amount,
          })
        )
          .then((res) => {
            console.log(res.hosted_invoice_url);
            const newTab = window.open("", "_blank");
            if (newTab) {
              newTab.document.write(
                `<script>window.location.href = '${res.hosted_invoice_url}';</script>`
              );
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.err);
    console.log(response);
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
      <div className="bg-[url('./wallpaper.png')] w-full min-h-screen py-4 bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <div className="bg-white/[0.6] sm:w-11/12 md:w-[750px] lg:w-[1000px] scale-90 md:scale-100 h-[600px] xs2:h-[600px] xs:h-2/3 p-2 flex flex-col items-center justify-center rounded-lg">
          <table className="scale-[0.7] xs2:scale-[0.9] xs:scale-100 xs2:w-full h-full">
            <thead className="h-12">
              <tr>
                <th>TIPO DE ANUNCIO</th>
                <th>
                  <Cell
                    type="primary"
                    label={"Membresia Silver"}
                    round={true}
                  />
                </th>
                <th>
                  <Cell type="secondary" label={"Membresia Gold"} />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Cell type="primary" label={"Anuncios"} round={true} />
                </td>
                <td>10 anuncios</td>
                <td>Ilimitado</td>
              </tr>
              <tr>
                <td>
                  <Cell type="secondary" label={"Duracion"} round={true} />
                </td>
                <td>30 dias</td>
                <td>6 meses</td>
              </tr>
              <tr>
                <td>
                  <Cell
                    type="primary"
                    label={"Anuncio en destacados"}
                    round={true}
                  />
                </td>
                <td>
                  <img
                    className="w-[30px] h-[30px] m-auto"
                    src="./x1.png"
                    alt="X"
                  />
                </td>
                <td>
                  <img
                    className="w-[30px] h-[30px] m-auto"
                    src="./ok1.png"
                    alt="O"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Cell
                    type="secondary"
                    label={"Venta con Financiamiento"}
                    round={true}
                  />
                </td>
                <td>
                  <img
                    className="w-[30px] h-[30px] m-auto"
                    src="./x1.png"
                    alt="X"
                  />
                </td>
                <td>
                  <img
                    className="w-[30px] h-[30px] m-auto"
                    src="./ok1.png"
                    alt="O"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Cell
                    type="primary"
                    label={"Sello de auto verificado"}
                    round={true}
                  />
                </td>
                <td>
                  <img
                    className="w-[30px] h-[30px] m-auto"
                    src="./x1.png"
                    alt="X"
                  />
                </td>
                <td>
                  <img
                    className="w-[30px] h-[30px] m-auto"
                    src="./ok1.png"
                    alt="O"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Cell
                    type="secondary"
                    label={"Garantia Motriz Incluida"}
                    round={true}
                  />
                </td>
                <td>
                  <img
                    className="w-[30px] h-[30px] m-auto"
                    src="./x1.png"
                    alt="X"
                  />
                </td>
                <td>
                  <img
                    className="w-[30px] h-[30px] m-auto"
                    src="./ok1.png"
                    alt="O"
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button
                    className="m-2 sm:w-[200px] lg:w-4/5 p-2 lg:h-[40px] bg-blue-500 rounded-md text-white"
                    onClick={() => smallMesOnClick(60000)}
                  >
                    $600.00 al mes
                  </button>
                </td>
                <td>
                  <button
                    className="m-2 sm:w-[200px] lg:w-4/5 p-2 lg:h-[40px] bg-blue-900 rounded-md text-white"
                    onClick={() => smallMesOnClick(360000)}
                  >
                    $3,600.00 al mes
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full flex justify-end">
            <button
              className="w-[100px] sm:w-[200px] lg:w-[300px] p-2 lg:h-[40px] bg-red-800 mt-4 mr-4 rounded-md text-white"
              onClick={handleCancelOnClick}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default System;
