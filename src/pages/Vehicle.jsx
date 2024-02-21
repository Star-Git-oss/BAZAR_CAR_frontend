import { useState } from "react";
import SignInput from "../components/SignInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { vehicleUpload } from "../action/vehicle";

const Sell = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [version, setVirsion] = useState("");
  const [mileage, setMileage] = useState("");
  const [transmission, setTransmission] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [price, setPrice] = useState("");
  const [payMethod, setPayMethod] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState("");
  const [selectedImage, setSelectedImage] = useState([]);

  const handleTerminosClick = () => {
    console.log(
      brand,
      year,
      version,
      mileage,
      transmission,
      whatsApp,
      price,
      payMethod,
      vehicleInfo,
      selectedImage
    );
    if (
      brand !== "" &&
      year !== "" &&
      version !== "" &&
      mileage !== "" &&
      transmission !== "" &&
      whatsApp !== "" &&
      price !== "" &&
      payMethod !== "" &&
      vehicleInfo !== "" &&
      selectedImage.length !== 0
    ) {
      const id = localStorage.getItem("id");
      const formData = new FormData();
      for (let i = 0; i < selectedImage.length; i++) {
        formData.append("files", selectedImage[i]);
      }

      formData.append("id", id);
      formData.append("brand", brand);
      formData.append("year", year);
      formData.append("version", version);
      formData.append("mileage", mileage);
      formData.append("transmission", transmission);
      formData.append("whatsApp", whatsApp);
      formData.append("price", price);
      formData.append("payMethod", payMethod);
      formData.append("vehicleInfo", vehicleInfo);

      try {
        dispatch(vehicleUpload(formData))
          .then((res) => navigate("/system"))
          .catch((err) => console.log(err));
      } catch (error) {
        console.error("Error uploading file", error);
      }
    } else {
      alert("Please fill all infos");
    }
  };
  const handleMethodChange = (event) => {
    setPayMethod(event.target.value);
  };
  const handleDragImageChange = (event) => {
    setSelectedImage((prev) => [...prev, ...event.target.files]);
  };
  const handleDeleteClick = (index) => {
    setSelectedImage([
      ...selectedImage.slice(0, index),
      ...selectedImage.slice(index + 1, selectedImage.length),
    ]);
  };

  return (
    <div className="bg-[url('./wallpaper.png')] w-full min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="bg-white/[0.6] w-5/6 max-w-[1400px] gap-12 flex flex-col justify-around rounded-lg my-20">
        <p className="w-full text-center lg:text-left xl:text-2xl text-xl text-blue-900 font-bold lg:ml-14 mt-2">
          ¡ Vendemos tu auto !
        </p>
        <div className="ml-4">
          <p className="w-full text-center lg:text-left xl:text-2xl lg:text-xl text-blue-900 font-bold">
            Informaciondel vehículo
          </p>
          <p className="w-full text-center lg:text-left text-md text-blue-800">
            Completa todos los datos.
          </p>
        </div>
        <div className="flex justify-evenly mb-8">
          <img src="avatar.png" alt="avatar" className="w-[50px] h-[50px] ml-8 lg:ml-0 hidden lg:block" />
          <div className="md:grid md:grid-cols-4 gap-12 w-10/12 lg:mr-14">
            <SignInput
              label={"Marca de auto"}
              type={"secondary"}
              value={brand}
              onChange={setBrand}
            />
            <SignInput
              x={true}
              label={"Año del auto"}
              type={"secondary"}
              value={year}
              onChange={setYear}
            />
            <SignInput
              x={true}
              label={"Version del auto"}
              type={"secondary"}
              value={version}
              onChange={setVirsion}
            />
            <SignInput
              x={true}
              label={"Kilometraje"}
              type={"secondary"}
              value={mileage}
              onChange={setMileage}
            />
            <SignInput
              x={true}
              label={"Transmisíon "}
              type={"secondary"}
              value={transmission}
              onChange={setTransmission}
            />
            <SignInput
              x={true}
              label={"WhatsApp de contacto"}
              type={"secondary"}
              value={whatsApp}
              onChange={setWhatsApp}
            />
            <SignInput
              x={true}
              label={"Precio "}
              type={"secondary"}
              value={price}
              onChange={setPrice}
            />
            <div className="flex flex-col w-full md:w-[300px] mb-4 h-fit md:h-20 md:mb-0 lg:ml-4">
              <p className="text-sm w-full text-blue-800 h-10">
                <span className="font-bold">X</span> Forma de pago
              </p>
              <label className="w-full flex justify-start container">
                <input
                  type="radio"
                  name="radio"
                  value="cash"
                  multiple
                  checked={payMethod === "cash"}
                  onChange={handleMethodChange}
                />
                <span className="font-bold ml-2">X</span> Contado
              </label>
              <label className="w-full flex justify-start container">
                <input
                  type="radio"
                  name="radio"
                  value="finance"
                  checked={payMethod === "finance"}
                  onChange={handleMethodChange}
                />
                <span className="font-bold ml-2">X</span> Financiamiento
              </label>
              <p className="text-blue-900 font-bold mt-4 z-0 w-full md:w-2/3 lg:w-3/4 text-center lg:text-left">
                Al selecionar venta en sistema de financiamiento aceptas
                <span
                  className="text-blue-500 cursor-pointer z-10"
                  onClick={handleTerminosClick}
                >
                  {" "}
                  Terminos y Condiciones
                </span>
              </p>
            </div>
            <div className="lg:ml-4 col-span-4 md:mt-2">
              <p className="w-full text-left xl:text-2xl lg:text-xl text-blue-900 font-bold">
                Informaciondel vehículo
              </p>
              <p className="w-full text-left text-md text-blue-800">
                Completa todos los datos.
              </p>
            </div>
            <textarea
              className="col-span-4 w-full h-80 p-4 bg-gray-300 mt-4 lg:ml-4"
              maxLength={"5000"}
              value={vehicleInfo}
              onChange={(e) => setVehicleInfo(e.target.value)}
            />
            <div className="col-span-3 border-slate-600 border-[1px] p-4 lg:ml-4 md:mr-0">
              <div className="ml-4 col-span-4">
                <p className="w-full text-left xl:text-2xl lg:text-xl text-blue-900 font-bold">
                  Imágenes
                </p>
                <p className="w-full text-left text-sm text-blue-900">
                  Tus fotos son muy importantes para aumnetar la posibilidad de
                  venderlo
                </p>
              </div>
              <div className="w-full h-96 overflow-auto bg-gray-300 border-slate-600 border-[1px] border-dotted mt-4 relative z-0">
                <input
                  className="hidden w-2 h-2 left-0 top-0 cursor-pointer bg-transparent z-20"
                  type="file"
                  multiple
                  id="upload"
                  name="upload"
                  onChange={handleDragImageChange}
                />
                <label
                  htmlFor="upload"
                  className="w-full h-full flex items-center justify-center z-10"
                >
                  {selectedImage.length === 0 ? "Choose the pictures" : ""}
                </label>
                <div className="absolute w-0 flex flex-col top-0 left-0 z-0">
                  {selectedImage.map((item, index) => {
                    console.log(index);
                    return (
                      <p
                        className="z-20 cursor-pointer w-max"
                        onClick={(e) => handleDeleteClick(index)}
                      >
                        <span className="w-10 h-10 text-red-500">X </span>
                        {item.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="border-slate-600 border-[1px] lg:-mr-4 flex flex-col items-center lg:mt-0 lg:ml-0">
              <p className="w-full text-left xl:text-2xl lg:text-xl text-blue-900 font-bold ml-2">
                Recomendaciones:
              </p>
              <img
                className="w-[200px] h-[140px]"
                src="tomas1.png"
                alt="tomas1"
              />
              <p className="text-center text-sm text-blue-900">
                Tomas las fotos Horizontales 4:3 de preferencia y menos de 3mb
              </p>
              <div className="flex justify-evenly w-full">
                <img
                  className="w-[80px] h-[80px]"
                  src="tomas2.png"
                  alt="tomas2"
                />
                <img
                  className="w-[80px] h-[80px]"
                  src="tomas3.png"
                  alt="tomas3"
                />
              </div>
              <p className="text-center text-sm text-blue-900">
                Toma las mejores fotos a tu auto frente, laterales, parte
                tarsera
              </p>
              <div className="flex justify-evenly w-full">
                <img
                  className="w-[80px] h-[80px]"
                  src="tomas4.png"
                  alt="tomas4"
                />
                <img
                  className="w-[80px] h-[80px]"
                  src="tomas5.png"
                  alt="tomas5"
                />
              </div>
              <p className="text-center text-sm text-blue-900">
                Te recomendamos fotos del interior asientos Kilometraje, llantas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sell;
