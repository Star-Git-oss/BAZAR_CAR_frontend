import React, { useEffect, useState } from "react";
import DropdownComponent from "./MySelect";
import SelectIndicator from "./SelectIndicator";

export function MyHeader({ active, num, title, label }) {
  return (
    <div
      className={`w-full h-full flex flex-col md:flex-row p-4 items-center justify-start gap-5 ${
        active ? "bg-blue-400" : "bg-gray-200"
      }`}
    >
      <p
        className={`h-[40px] w-[40px] md:w-[54px] lg:w-[48px] xl:w-[50px] flex justify-center items-center text-2xl rounded-full md:ml-4 ${
          active ? "bg-white text-blue-400" : "bg-gray-300 text-white"
        }`}
      >
        {num}
      </p>
      <div className="w-full flex flex-col justify-center md:ml-4 md:items-start">
        <p
          className={`w-full text-lg md:text-xl text:center md:text-left ${
            active ? "text-white" : "text-gray-700"
          }`}
        >
          {title}
        </p>
        <p
          className={`w-full text-sm md:text-md text:center md:text-left ${
            active ? "text-white" : "text-gray-400"
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

export function Selecciona({ setActive }) {
  const planList = [
    "AUTOMATIC",
    "AUTOMATIC 2024",
    "AUTOMATIC CAMPA",
    "AUTOMATIC DVA 2024",
    "AUTOMATIC DVA NUEVOS 2024",
    "AUTOMATIC DVA NUEVOS",
  ];
  const tipoList = ["NUEVO"];
  const anoList = ["2023", "2024"];
  const accesoriosList = ["Financiado"];
  const garantiaList = ["Financiado"];
  const otrosList = ["Financiado"];

  const [plan, setPlan] = useState(planList[0]);
  const [tipo, setTipo] = useState(tipoList[0]);
  const [ano, setAno] = useState(anoList[0]);
  const [valor, setValor] = useState("");
  const [accesoriosListItem, setAccesoriosListItem] = useState(
    accesoriosList[0]
  );
  const [garantia, setGarantia] = useState();
  const [garantiaListItem, setGarantiaListItem] = useState(garantiaList[0]);
  const [otros, setOtros] = useState();
  const [otrosListItem, setOtrosListItem] = useState(otrosList[0]);
  console.log(
    plan,
    tipo,
    ano,
    valor,
    accesoriosListItem,
    garantia,
    garantiaListItem,
    otros,
    otrosListItem
  );
  return (
    <div className={`w-full h-full items-center justify-start bg-white`}>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center px-8 pt-20 gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-1/2 h-fit md:pr-0 sm:pr-16 xs:10">
          <p className="text-sm w-full text-left md:text-right">Plan Financiero:</p>
          <DropdownComponent
            arrow={false}
            selectList={planList}
            setValue={setPlan}
          />
          <p className="text-sm w-full text-left md:text-right">Tipo de Crédito:</p>
          <DropdownComponent
            arrow={false}
            selectList={tipoList}
            setValue={setTipo}
          />
          <p className="text-sm w-full text-left md:text-right">Año del Vehículo:</p>
          <DropdownComponent
            arrow={false}
            selectList={anoList}
            setValue={setAno}
          />
          <p className="text-sm w-full text-left md:text-right">
            Valor Factura de la Unidad:
          </p>
          <input
            type="text"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="pl-3 text-xs border-[1px] border-gray-200 outline-none focus:border-[1px] h-[25px] focus:border-blue-200"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-1/2 h-fit">
          <p className="text-sm">
            Accesorios:<span className="text-green-600 font-extrabold">+</span>
          </p>
          <input
            type="text"
            value={"0"}
            className="pl-3 text-xs border-[1px] border-gray-200 outline-none focus:border-[1px] h-[25px] focus:border-blue-200 disabled:bg-gray-100"
            disabled
          />
          <DropdownComponent
            arrow={true}
            selectList={accesoriosList}
            setValue={setAccesoriosListItem}
          />
          <p className="text-sm">Garantia Extendida:</p>
          <input
            type="text"
            value={garantia}
            onChange={(e) => setGarantia(e.target.value)}
            className="border-[1px] pl-3 text-xs border-gray-200 outline-none focus:border-[1px] h-[25px] focus:border-blue-200"
          />
          <DropdownComponent
            arrow={true}
            selectList={garantiaList}
            setValue={setGarantiaListItem}
          />
          <p className="text-sm">Otros:</p>
          <input
            type="text"
            value={otros}
            onChange={(e) => setOtros(e.target.value)}
            className="border-[1px] pl-3 text-xs border-gray-200 outline-none focus:border-[1px] h-[25px] focus:border-blue-200"
          />
          <DropdownComponent
            arrow={true}
            selectList={otrosList}
            setValue={setOtrosListItem}
          />
        </div>
      </div>
      <div className="w-full flex justify-end p-4">
        <button
          className="w-[120px] h-[36px] ml-[6px] bg-blue-400 hover:bg-blue-300 rounded-[4px] text-white transition-colors duration-300 ease-in-out"
          onClick={() => setActive("calcula")}
          style={{ fontSize: "13px" }}
        >
          Siguiente <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export function Calcula({ setActive }) {
  const plazoList = ["12", "24", "36", "48", "60", "72"];
  const comisionList = ["0", "0.5", "1", "1.5", "2", "2.5", "3"];

  const [plazoListItem, setPlazoListItem] = useState(plazoList[0]);
  const [comisionListItem, setComisionListItem] = useState(comisionList[0]);
  const [enganche, setEnganche] = useState(10);

  console.log(
    "plazoListItem  comisionListItem  enganche",
    plazoListItem,
    comisionListItem,
    enganche
  );
  useEffect(() => {
    if (enganche < 10) setEnganche(10);
  }, [enganche]);
  console.log(plazoListItem, comisionListItem, enganche);
  return (
    <div className={`w-full h-full p-4 items-center justify-start bg-white`}>
      <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        <div className="w-full flex flex-col gap-4">
          <div className="flex w-full h-10 border-[1px] border-gray-200">
            <p className="w-3/5 h-full text-sm flex items-center justify-center md:justify-start bg-blue-300 text-white md:pl-4">
              Valor Total
            </p>
            <p className="w-2/5 h-full text-sm flex items-center bg-gray-200 pl-4">
              $10.00
            </p>
          </div>
          <div className="flex w-full h-10 border-[1px] border-gray-200">
            <p className="w-3/5 h-full text-sm flex flex-col items-center md:items-start justify-center md:justify-start bg-blue-300 text-white md:pl-4">
              Comisión<b/>por Apertura ($)*
            </p>
            <p className="w-2/5 h-full text-sm flex items-center bg-gray-200 pl-4">
              0% - $0.00
            </p>
          </div>
          <div className="flex w-full h-10 border-[1px] border-gray-200">
            <p className="w-3/5 h-full text-sm flex flex-col items-center md:items-start justify-center md:justify-start bg-blue-300 text-white md:pl-4">
              Comisión<b />por Admon. ($)*
            </p>
            <p className="w-2/5 h-full text-sm flex items-center bg-gray-200 pl-4">
              0% - $0.00
            </p>
          </div>
          <div className="flex justify-between">
            <p className="w-2/5 pr-6 flex items-center justify-end text-sm">
              Plazo:
            </p>
            <div className="w-3/5">
              <SelectIndicator
                selectList={plazoList}
                setValue={setPlazoListItem}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <p className="w-2/5 pr-6 flex items-center justify-end text-sm mb-4">
              Comisión por<br /> Apertura(%):
            </p>
            <div className="w-3/5">
              <SelectIndicator
                selectList={comisionList}
                setValue={setComisionListItem}
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-sm">* IVA incluido</p>
            <p className="text-sm">** Mensualidad sin intereses</p>
            <p className="text-sm">*** Sin prima de seguro</p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start gap-8">
          <p className="w-full h-10 border-[1px] border-gray-200 text-md flex items-center justify-center bg-blue-300 text-white">
            Mensualidad**
          </p>
          <p className="w-full h-10 text-3xl text-gray-800 flex items-center justify-center">
            <b>$0.75</b>
          </p>
          <div className="w-full flex justify-between">
            <p className="w-2/5 pr-6 flex items-center justify-end text-sm">
              Enganche(%):
            </p>
            <div className="w-3/5">
              <input
                type="number"
                value={enganche}
                onChange={(e) => setEnganche(e.target.value)}
                className="h-8 outline-none border-[1px] pl-3 text-xs border-gray-200"
              />
            </div>
          </div>
          <div className="w-full flex justify-between">
            <p className="w-2/5 pr-6 flex items-center justify-end text-sm">
              Enganche($):
            </p>
            <div className="w-3/5">
              <input
                type="text"
                value={String(
                  (((parseFloat(enganche) / 10) * 3) / 2).toFixed(2)
                )}
                className="h-8 outline-none border-[1px] pl-3 text-xs border-gray-200 focus:border-blue-200"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start gap-8">
          <p className="w-full h-10 border-[1px] border-gray-200 text-md flex items-center justify-center bg-blue-300 text-white">
            Pago Inicial***
          </p>
          <p className="w-full h-10 text-3xl text-black flex items-center justify-center">
            <b>$1.00</b>
          </p>
          <div className="w-full flex justify-between">
            <p className="w-2/5 pr-6 flex items-center justify-end text-sm">
              Enganche($):
            </p>
            <div className="w-3/5">
              <input
                type="text"
                value={"18.00"}
                className="h-8 outline-none border-[1px] pl-3 text-xs border-gray-200 focus:border-blue-200"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex px-4 justify-between mt-8">
        <button
          className="w-[120px] h-[36px] ml-[6px] bg-blue-400 hover:bg-blue-300 rounded-[4px] text-white transition-colors duration-300 ease-in-out"
          onClick={() => setActive("selecciona")}
          style={{ fontSize: "13px" }}
        >
          <i className="fa fa-chevron-left"></i> Atras
        </button>
        <button
          className="w-[120px] h-[36px] ml-[6px] bg-blue-400 hover:bg-blue-300 rounded-[4px] text-white transition-colors duration-300 ease-in-out"
          onClick={() => setActive("elige")}
          style={{ fontSize: "13px" }}
        >
          Siguiente <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export function Elige({ setActive }) {
  const marcaList = [
    "ACURA",
    "AUDI",
    "BAIC",
    "BENTLEY",
    "BMW",
    "BUICK",
    "BYD",
    "CADILLAC",
    "CBO MOTORS",
  ];
  const versionList = [
    "AA ACURA RDX ADVANCE 5P L4 2.0T BA ABS AA AUT., 05 OCUP",
    "AA ACURA TLX TYPE-S 4P V6 2.0T BA ABS AA AUT., 05 OCUP",
  ];
  const estadoList = [
    "AGUASCALIENTES",
    "BAJA CALIFORNIA NORTE",
    "BAJA CALIFORNIA SUR",
    "CAMPECHE",
    "COAHUILA",
  ];
  const localidadList = [""];
  const usoList = ["USO PARICULAR", "UBER", "TAXI"];
  const buscarList = ["FINANCIDO", "CUENTA CLIENTE"];
  const tipoList = ["Seleccione", "Financiado", "Contado"];

  const [marcaListItem, setMarcaListItem] = useState(marcaList[0]);
  const [versionListItem, setVersionListItem] = useState(versionList[0]);
  const [nombre, setNombre] = useState("");
  const [estadoListItem, setEstadoListItem] = useState(estadoList[0]);
  const [localidadListItem, setLocalidadListItem] = useState(localidadList[0]);
  const [codigo, setCodigo] = useState("");
  const [usoListItem, setUsoListItem] = useState(usoList[0]);
  const [buscarListItem, setBuscarListItem] = useState(buscarList[0]);
  const [tipoListItem, setTipoListItem] = useState(tipoList[0]);

  console.log(
    "marcaListItem, ersionListItem, nombre, estadoListItem, localidadListItem, codigo, usoListItem, buscarListItem, tipoListItem",
    marcaListItem,
    versionListItem,
    nombre,
    estadoListItem,
    localidadListItem,
    codigo,
    usoListItem,
    buscarListItem,
    tipoListItem
  );
  return (
    <div className={`w-full h-full py-4 items-center bg-white`}>
      <div className="flex md:flex-row flex-col items-start gap-8 justify-center px-4">
        <div className="w-full flex h-fit flex-col gap-8">
          <p className="w-full h-5 border-[1px] border-gray-200 text-sm flex items-center justify-center bg-blue-300 text-white">
            Datos del Vehículo
          </p>
          <div className="flex">
            <p className="text-sm w-40 flex items-center justify-end pr-8">
              Marca:
            </p>
            <div className="w-4/5 h-6">
              <DropdownComponent
                arrow={false}
                selectList={marcaList}
                setValue={setMarcaListItem}
              />
            </div>
          </div>
          <div className="flex">
            <p className="text-sm w-40 flex items-center justify-end pr-8">
              Versión:
            </p>
            <div className="w-4/5 h-6">
              <DropdownComponent
                arrow={false}
                selectList={versionList}
                setValue={setVersionListItem}
              />
            </div>
          </div>
          <p className="w-full h-5 border-[1px] border-gray-200 text-sm flex items-center justify-center bg-blue-300 text-white">
            Datos del Cliente
          </p>
          <div className="flex">
            <p className="text-sm w-auto flex items-center justify-end pr-2">
              Nombre de Cliente:
            </p>
            <div className="w-4/5">
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre de Cliente"
                className="w-full h-8 outline-none border-[1px] pl-3 text-xs border-gray-200 focus:border-blue-200"
              />
            </div>
          </div>
          <div className="flex">
            <p className="text-sm w-40 flex items-center justify-end pr-8">
              Estado:
            </p>
            <div className="w-4/5 h-6">
              <DropdownComponent
                arrow={false}
                selectList={estadoList}
                setValue={setEstadoListItem}
              />
            </div>
          </div>
          <div className="flex">
            <p className="text-sm w-40 flex items-center justify-end pr-8">
              Localidad:
            </p>
            <div className="w-4/5 h-6">
              <DropdownComponent
                arrow={false}
                selectList={localidadList}
                setValue={setLocalidadListItem}
              />
            </div>
          </div>
          <div className="flex">
            <p className="text-sm w-40 flex items-center justify-end pr-8">
              Código Postal:
            </p>
            <div className="w-4/5">
              <input
                type="text"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                className="w-full h-8 outline-none border-[1px] pl-3 text-xs border-gray-200 focus:border-blue-200"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start h-full gap-8">
          <p className="w-full h-5 border-[1px] border-gray-200 text-sm flex items-center justify-center bg-blue-300 text-white">
            Uso del Vehículo
          </p>
          <div className="flex mb-8">
            <p className="text-sm w-40 flex items-center justify-end pr-8">
              Uso del Vehículo:
            </p>
            <div className="w-4/5">
              <SelectIndicator selectList={usoList} setValue={setUsoListItem} />
            </div>
          </div>
          <p className="w-full h-5 border-[1px] border-gray-200 text-sm flex items-center justify-center bg-blue-300 text-white">
            Uso del Vehículo
          </p>
          <button className="w-full h-7 rounded-md border-[1px] border-gray-200 text-md flex items-center justify-center bg-red-300 text-white">
            Buscar Seguro<i class="fas fa-glass"></i>
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="px-4 flex flex-col gap-2 col-span-2">
              <div className="flex w-full h-10 border-[1px] border-gray-200">
                <p className="w-3/5 h-full text-sm flex items-center bg-blue-300 text-white pl-4">
                  Comisión por Apertura ($)*
                </p>
                <p className="w-2/5 h-full text-sm flex items-center bg-gray-200 pl-4">
                  0% - $0.00
                </p>
              </div>
              <div className="flex w-full h-10 border-[1px] border-gray-200">
                <p className="w-3/5 h-full text-sm flex items-center bg-blue-300 text-white pl-4">
                  Comisión por Apertura ($)*
                </p>
                <p className="w-2/5 h-full text-sm flex items-center bg-gray-200 pl-4">
                  0% - $0.00
                </p>
              </div>
              <div className="flex w-full h-10 border-[1px] border-gray-200">
                <p className="w-3/5 h-full text-sm flex items-center bg-blue-300 text-white pl-4">
                  Comisión por Apertura ($)*
                </p>
                <p className="w-2/5 h-full text-sm flex items-center bg-gray-200 pl-4">
                  0% - $0.00
                </p>
              </div>
            </div>
            <div className="flex pl-4 pr-2 md:p-0 justify-center items-center">
              <SelectIndicator
                selectList={buscarList}
                setValue={setBuscarListItem}
              />
            </div>
          </div>
          <p className="w-full h-5 border-[1px] border-gray-200 text-sm flex items-center justify-center bg-blue-300 text-white">
            Seguro de Vida
          </p>
          <div className="flex mb-8">
            <p className="text-sm flex items-center justify-end pr-4">
              Tipo de Seguro de Vida:
            </p>
            <div className="w-3/5 flex justify-end">
              <SelectIndicator
                selectList={tipoList}
                setValue={setTipoListItem}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="w-[120px] h-[36px] ml-[6px] bg-blue-400 hover:bg-blue-300 rounded-[4px] mt-8 text-white transition-colors duration-300 ease-in-out"
        onClick={() => setActive("calcula")}
        style={{ fontSize: "13px" }}
      >
        <i className="fa fa-chevron-left"></i> Atras
      </button>
    </div>
  );
}
