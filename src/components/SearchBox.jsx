import "react-multi-carousel/lib/styles.css";
import "../components/slick/styles.css";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import CustomAriaLive from "./CustomAriaLive";

const SearchBox = ({
  brand,
  setBrand,
  auto,
  setAuto,
  yearMin,
  setYearMin,
  yearMax,
  setYearMax,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  searchEvent,
  setSearchEvent
}) => {
  const yearList = [
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
    "2004",
    "2003",
    "2002",
  ];
  const brandList = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Volkswagen",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Nissan",
    "Tesla",
    "Jeep",
    "Subaru",
    "Hyundai",
    "Kia",
    "Lexus",
    "Porsche",
    "Mazda",
    "Volvo",
    "Fiat",
    "Mitsubishi",
    "Jaguar",
    "Land Rover",
    "GMC",
    "Chrysler",
    "Dodge",
    "Buick",
    "Cadillac",
    "Lincoln",
    "Infiniti",
    "Acura",
    "MINI",
    "Alfa Romeo",
    "Ram",
    "Suzuki",
    "Genesis",
    "Maserati",
    "Ferrari",
    "Aston Martin",
    "Bentley",
  ];
  const autosList = [
    "Autos",
    "Motos",
    "Camiones",
    "Nautica",
    "Otros",
    "Maquinarias",
  ];
  const minPriceList = ["Precio desde", "Sin precio mínimo", "$50,000"];
  const maxPriceList = [
    "Precio hasta",
    "Sin precio máximo.",
    "$60,000",
    "$70,000",
    "$80,000",
    "$90,000",
    "< $90,000",
  ];

  const [autoListShow, setAutoListShow] = useState(false);
  const [brandListShow, setBrandListShow] = useState(false);
  const [yearListMinShow, setYearMinListShow] = useState(false);
  const [yearListMaxShow, setYearMaxListShow] = useState(false);
  const [priceListMinShow, setPriceMinListShow] = useState(false);
  const [priceListMaxShow, setPriceMaxListShow] = useState(false);

  const [autoListSearch, setAutoListSearch] = useState("");
  const [brandListSearch, setBrandListSearch] = useState("");
  const [yearListMinSearch, setYearMinListSearch] = useState("");
  const [yearListMaxSearch, setYearMaxListSearch] = useState("");
  const [priceListMinSearch, setPriceMinListSearch] = useState("");
  const [priceListMaxSearch, setPriceMaxListSearch] = useState("");

  useEffect(() => {
    console.log(
      autoListShow,
      brandListShow,
      yearListMinShow,
      yearListMaxShow,
      priceListMinShow,
      priceListMaxShow
    );
  }, [
    autoListShow,
    brandListShow,
    yearListMinShow,
    yearListMaxShow,
    priceListMinShow,
    priceListMaxShow,
  ]);

  const handleBuscarClick = () => {
    setSearchEvent(!searchEvent);
    handleSearch();
  };
  const handleClickAutoShow = (value) => {
    setAutoListShow((prev) => !prev);
    setBrandListShow(false);
    setYearMinListShow(false);
    setYearMaxListShow(false);
    setPriceMinListShow(false);
    setPriceMaxListShow(false);
  };
  const handleClickAuto = (value) => {
    setAutoListShow(false);
    setAuto(value);
    setAutoListSearch("");
  };
  const handleClickBrandShow = (value) => {
    console.log("handleClickBrandShow");
    setBrandListShow((prev) => !prev);
    setAutoListShow(false);
    setYearMinListShow(false);
    setYearMaxListShow(false);
    setPriceMinListShow(false);
    setPriceMaxListShow(false);
  };
  const handleClickBrand = (value) => {
    setBrandListShow(false);
    setBrand(value);
    setBrandListSearch("");
  };
  const handleYearMinShow = () => {
    setYearMinListShow((prev) => !prev);
    setAutoListShow(false);
    setBrandListShow(false);
    setYearMaxListShow(false);
    setPriceMinListShow(false);
    setPriceMaxListShow(false);
  };
  const handleClickYearMin = (value) => {
    setYearMinListShow(false);
    setYearMin(value);
    setYearMinListSearch("");
  };
  const handleYearMaxShow = () => {
    setYearMaxListShow((prev) => !prev);
    setAutoListShow(false);
    setBrandListShow(false);
    setYearMinListShow(false);
    setPriceMinListShow(false);
    setPriceMaxListShow(false);
  };
  const handleClickYearMax = (value) => {
    setYearMaxListShow(false);
    setYearMax(value);
    setYearMaxListSearch("");
  };
  const handlePriceMinShow = () => {
    setPriceMinListShow((prev) => !prev);
    setAutoListShow(false);
    setBrandListShow(false);
    setYearMinListShow(false);
    setYearMaxListShow(false);
    setPriceMaxListShow(false);
  };
  const handleClickPriceMin = (value) => {
    setPriceMinListShow(false);
    setPriceMin(value);
    setPriceMinListSearch("");
  };
  const handlePriceMaxShow = () => {
    setPriceMaxListShow((prev) => !prev);
    setPriceMinListShow(false);
    setAutoListShow(false);
    setBrandListShow(false);
    setYearMinListShow(false);
    setYearMaxListShow(false);
  };
  const handleClickPriceMax = (value) => {
    setPriceMaxListShow(false);
    setPriceMax(value);
    setPriceMaxListSearch("");
  };
  const handleMouseLeave = () => {
    setAutoListShow(false);
    setBrandListShow(false);
    setYearMinListShow(false);
    setYearMaxListShow(false);
    setPriceMinListShow(false);
    setPriceMaxListShow(false);
    setAutoListSearch("");
    setBrandListSearch("");
    setYearMinListSearch("");
    setYearMaxListSearch("");
    setPriceMinListSearch("");
    setPriceMaxListSearch("");
  };

  return (
    <>
      {/* <div className="w-screen h-screen absolute top-[62%] right-2 xs2:right-10 xs:right-20 md:top-[65%] md:right-36 z-30 flex justify-end -translate-y-1/2"> */}
        <div
          className="absolute w-screen h-screen top-0 left-0 z-20"
          onClick={handleMouseLeave}
        ></div>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:mt-4 md:mt-2 sm:left-[83%] max-w-[250px] md:max-w-[320px] w-11/12 h-fit rounded-lg bg-white/[0.8] z-40 px-2 xs:px-8 py-2 xs:py-4 border-blue-700 border-2 flex flex-col gap-2">
          <div
            className="w-screen h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-[100%] absolute"
            onClick={handleMouseLeave}
          ></div>
          <>
            {/* <input
          className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md pl-2 h-12 lg:h-16 col-span-2"
          type="text"
          id="monto"
          min="0"
          step="1000"
          placeholder="Marca"
          value={auto}
          onChange={(e) => setAuto(e.target.value)}
        /> */}
            {/* <select
          className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md pl-2 h-12 lg:h-16 col-span-2"
          value={auto}
          onChange={(e) => setAuto(e.target.value)}
        >
          <option value={"Autos"}>Autos</option>
          <option value={"Motos"}>Motos</option>
          <option value={"Camiones"}>Camiones</option>
          <option value={"Nautica"}>Nautica</option>
          <option value={"Otros"}>Otros</option>
          <option value={"Maquinarias"}>Maquinarias</option>
        </select> */}
          </>
          {/* <CustomAriaLive options={autosList} /> */}
          <div className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md h-8 pr-2 lg:h-12 flex items-center justify-between relative">
            {autoListShow ? (
              <input
                className="w-full h-full rounded-md px-2 outline-none"
                value={autoListSearch}
                onChange={(e) => setAutoListSearch(e.target.value)}
              />
            ) : (
              <label
                className="w-full h-full flex items-center cursor-pointer pl-2"
                onClick={handleClickAutoShow}
              >
                {auto}
              </label>
            )}
            <FontAwesomeIcon icon={faAngleDown} />
            <div
              className={`absolute cursor-pointer min-h-12 h-fit max-h-48 top-[48px] shadow-xl bg-white w-full overflow-auto border-[2px] border-gray-400 rounded-sm pt-2 z-50 ${
                autoListShow ? "block" : "hidden"
              }`}
            >
              {autosList
                .filter((item) => item.toLowerCase().includes(autoListSearch.toLowerCase()))
                .map((item) => (
                  <p
                    key={item}
                    className="w-full pl-2 h-8 border-t-[1px] border-gray-300 flex items-center bg-white hover:bg-blue-200 z-50 cursor-pointer"
                    onClick={() => handleClickAuto(item)}
                  >
                    {item}
                  </p>
                ))}
            </div>
          </div>
          <>
            {/* <input
          className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md pl-2 h-12 lg:h-16 col-span-2"
          type="text"
          id="monto"
          min="0"
          step="1000"
          placeholder="Auto"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        /> */}
            {/* <select
          className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md pl-2 h-12 lg:h-16 col-span-2 mt-[3%]"
          value={brand}
          id="brand"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value={"Toyota"}>Toyota</option>
          <option value={"Honda"}>Honda</option>
          <option value={"Ford"}>Ford</option>
          <option value={"Chevrolet"}>Chevrolet</option>
          <option value={"Volkswagen"}>Volkswagen</option>
          <option value={"BMW"}>BMW</option>
          <option value={"Mercedes-Benz"}>Mercedes-Benz</option>
          <option value={"Audi"}>Audi</option>
          <option value={"Nissan"}>Nissan</option>
          <option value={"Tesla"}>Tesla</option>
          <option value={"Jeep"}>Jeep</option>
          <option value={"Subaru"}>Subaru</option>
          <option value={"Hyundai"}>Hyundai</option>
          <option value={"Kia"}>Kia</option>
          <option value={"Lexus"}>Lexus</option>
          <option value={"Porsche"}>Porsche</option>
          <option value={"Mazda"}>Mazda</option>
          <option value={"Volvo"}>Volvo</option>
          <option value={"Fiat"}>Fiat</option>
          <option value={"Mitsubishi"}>Mitsubishi</option>
          <option value={"Jaguar"}>Jaguar</option>
          <option value={"Land Rover"}>Land Rover</option>
          <option value={"GMC"}>GMC</option>
          <option value={"Chrysler"}>Chrysler</option>
          <option value={"Dodge"}>Dodge</option>
          <option value={"Buick"}>Buick</option>
          <option value={"Cadillac"}>Cadillac</option>
          <option value={"Lincoln"}>Lincoln</option>
          <option value={"Infiniti"}>Infiniti</option>
          <option value={"Acura"}>Acura</option>
          <option value={"MINI"}>MINI</option>
          <option value={"Alfa Romeo"}>Alfa Romeo</option>
          <option value={"Ram"}>Ram</option>
          <option value={"Suzuki"}>Suzuki</option>
          <option value={"Genesis"}>Genesis</option>
          <option value={"Maserati"}>Maserati</option>
          <option value={"Ferrari"}>Ferrari</option>
          <option value={"Aston Martin"}>Aston Martin</option>
          <option value={"Bentley"}>Bentley</option>
        </select> */}
          </>
          <div className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md h-8 pr-2 lg:h-12 flex items-center justify-between relative">
            {brandListShow ? (
              <input
                className="w-full h-full rounded-md px-2 outline-none"
                value={brandListSearch}
                onChange={(e) => setBrandListSearch(e.target.value)}
              />
            ) : (
              <label
                className="w-full h-full flex items-center cursor-pointer pl-2"
                onClick={handleClickBrandShow}
              >
                {brand}
              </label>
            )}
            <FontAwesomeIcon icon={faAngleDown} />
            <div
              className={`absolute cursor-pointer min-h-12 h-fit max-h-48 top-[48px] shadow-xl bg-white w-full overflow-auto border-[2px] border-gray-400 rounded-sm pt-2 z-50 ${
                brandListShow ? "block" : "hidden"
              }`}
            >
              {brandList
                .filter((item) => item.toLowerCase().includes(brandListSearch.toLowerCase()))
                .map((item) => (
                  <p
                    key={item}
                    className="w-full pl-2 h-8 border-t-[1px] border-gray-300 flex items-center bg-white hover:bg-blue-200 z-50 cursor-pointer"
                    onClick={() => handleClickBrand(item)}
                  >
                    {item}
                  </p>
                ))}
            </div>
          </div>
          <>
            {/* <input
          className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md pl-2 h-12 lg:h-16"
          type="text"
          id="monto"
          min="0"
          step="1000"
          placeholder="Año desde"
          value={yearMin}
          onChange={(e) => setYearMin(e.target.value)}
        /> */}
            {/* <select
          className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md pl-2 h-12 lg:h-16 mt-[6%]"
          value={yearMin}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
          onChange={(e) => setYearMin(e.target.value)}
        >
          <option value={"2024"}>2024</option>
          <option value={"2023"}>2023</option>
          <option value={"2022"}>2022</option>
          <option value={"2021"}>2021</option>
          <option value={"2020"}>2020</option>
          <option value={"2019"}>2019</option>
          <option value={"2017"}>2017</option>
          <option value={"2016"}>2016</option>
          <option value={"2015"}>2015</option>
          <option value={"2014"}>2014</option>
          <option value={"2013"}>2013</option>
          <option value={"2012"}>2012</option>
          <option value={"2011"}>2011</option>
          <option value={"2010"}>2010</option>
          <option value={"2009"}>2009</option>
          <option value={"2008"}>2008</option>
          <option value={"2007"}>2007</option>
          <option value={"2006"}>2006</option>
          <option value={"2005"}>2005</option>
          <option value={"2004"}>2004</option>
          <option value={"2003"}>2003</option>
          <option value={"2002"}>2002</option>
        </select> */}
          </>
          <div className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md h-8 pr-2 lg:h-12 flex items-center justify-between relative">
            {yearListMinShow ? (
              <input
                className="w-full h-full rounded-md px-2 outline-none"
                value={yearListMinSearch}
                onChange={(e) => setYearMinListSearch(e.target.value)}
              />
            ) : (
              <label
                className="w-full h-full flex items-center cursor-pointer pl-2"
                onClick={handleYearMinShow}
              >
                {yearMin}
              </label>
            )}
            <FontAwesomeIcon icon={faAngleDown} />
            <div
              className={`absolute cursor-pointer min-h-12 h-fit max-h-48 top-[48px] shadow-xl bg-white w-full overflow-auto border-[2px] border-gray-400 rounded-sm pt-2 z-50 ${
                yearListMinShow ? "block" : "hidden"
              }`}
            >
              {yearList
                .filter((item) => item.toLowerCase().includes(yearListMinSearch.toLowerCase()))
                .map((item) => (
                  <p
                    key={item}
                    className="w-full pl-2 h-8 border-t-[1px] border-gray-300 flex items-center bg-white hover:bg-blue-200 z-50 cursor-pointer"
                    onClick={() => handleClickYearMin(item)}
                  >
                    {item}
                  </p>
                ))}
            </div>
          </div>
          <>
            {/* <input
          className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md pl-2 h-12 lg:h-16"
          type="text"
          id="monto"
          min="0"
          step="1000"
          placeholder="Año Hasta"
          value={yearMax}
          onChange={(e) => setYearMax(e.target.value)}
        /> */}
            {/* <select
          className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md pl-2 h-12 lg:h-16 mt-[6%]"
          value={yearMax}
          onChange={(e) => setYearMax(e.target.value)}
        >
          <option value={"2024"}>2024</option>
          <option value={"2023"}>2023</option>
          <option value={"2022"}>2022</option>
          <option value={"2021"}>2021</option>
          <option value={"2020"}>2020</option>
          <option value={"2019"}>2019</option>
          <option value={"2017"}>2017</option>
          <option value={"2016"}>2016</option>
          <option value={"2015"}>2015</option>
          <option value={"2014"}>2014</option>
          <option value={"2013"}>2013</option>
          <option value={"2012"}>2012</option>
          <option value={"2011"}>2011</option>
          <option value={"2010"}>2010</option>
          <option value={"2009"}>2009</option>
          <option value={"2008"}>2008</option>
          <option value={"2007"}>2007</option>
          <option value={"2006"}>2006</option>
          <option value={"2005"}>2005</option>
          <option value={"2004"}>2004</option>
          <option value={"2003"}>2003</option>
          <option value={"2002"}>2002</option>
        </select> */}
          </>
          <div className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md h-8 pr-2 lg:h-12 flex items-center justify-between relative">
            {yearListMaxShow ? (
              <input
                className="w-full h-full rounded-md px-2 outline-none"
                value={yearListMaxSearch}
                onChange={(e) => setYearMaxListSearch(e.target.value)}
              />
            ) : (
              <label
                className="w-full h-full flex items-center cursor-pointer pl-2"
                onClick={handleYearMaxShow}
              >
                {yearMax}
              </label>
            )}
            <FontAwesomeIcon icon={faAngleDown} />
            <div
              className={`absolute cursor-pointer min-h-12 h-fit max-h-48 top-[48px] shadow-xl bg-white w-full overflow-auto border-[2px] border-gray-400 rounded-sm pt-2 z-50 ${
                yearListMaxShow ? "block" : "hidden"
              }`}
            >
              {yearList
                .filter((item) => item.toLowerCase().includes(yearListMaxSearch.toLowerCase()))
                .map((item) => (
                  <p
                    key={item}
                    className="w-full pl-2 h-8 border-t-[1px] border-gray-300 flex items-center bg-white hover:bg-blue-200 z-50 cursor-pointer"
                    onClick={() => handleClickYearMax(item)}
                  >
                    {item}
                  </p>
                ))}
            </div>
          </div>
          <>
            {/* <input
          className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md pl-2 h-12 lg:h-16"
          type="text"
          id="monto"
          min="0"
          step="1000"
          placeholder="Precio desde"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
        /> */}
            {/* <select
          className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md pl-2 h-12 lg:h-16 mt-[6%]"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
        >
          <option value={"Precio desde"}>Precio desde</option>
          <option value={"Sin precio mínimo"}>Sin precio mínimo</option>
          <option value={"$50,000"}>$50,000</option>
        </select> */}
          </>
          <div className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md h-8 pr-2 lg:h-12 flex items-center justify-between relative">
            {priceListMinShow ? (
              <input
                className="w-full h-full rounded-md px-2 outline-none"
                value={priceListMinSearch}
                onChange={(e) => setPriceMinListSearch(e.target.value)}
              />
            ) : (
              <label
                className="w-full h-full flex items-center  cursor-pointer pl-2"
                onClick={handlePriceMinShow}
              >
                {priceMin}
              </label>
            )}
            <FontAwesomeIcon icon={faAngleDown} />
            <div
              className={`absolute cursor-pointer min-h-12 h-fit max-h-48 top-[48px] shadow-xl bg-white w-full overflow-auto border-[2px] border-gray-400 rounded-sm pt-2 z-50 ${
                priceListMinShow ? "block" : "hidden"
              }`}
            >
              {minPriceList
                .filter((item) => item.toLowerCase().includes(priceListMinSearch.toLowerCase()))
                .map((item) => (
                  <p
                    key={item}
                    className="w-full pl-2 h-8 border-t-[1px] border-gray-300 flex items-center bg-white hover:bg-blue-200 z-50 cursor-pointer"
                    onClick={() => handleClickPriceMin(item)}
                  >
                    {item}
                  </p>
                ))}
            </div>
          </div>
          <>
            {/* <input
          className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md pl-2 h-12 lg:h-16"
          type="text"
          id="monto"
          min="0"
          step="1000"
          placeholder="Precio Hasta"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
        /> */}
            {/* <select
          className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md pl-2 h-12 lg:h-16 mt-[6%]"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
        >
          <option value={"Precio hasta"}>Precio hasta</option>
          <option value={"Sin precio máximo."}>Sin precio máximo.</option>
          <option value={"$60,000"}>$60,000</option>
          <option value={"$70,000"}>$70,000</option>
          <option value={"$80,000"}>$80,000</option>
          <option value={"$90,000"}>$90,000</option>
          <option value={"&lt; $90,000"}>&lt; $90,000</option>
        </select> */}
          </>
          <div className="outline-none cursor-pointer border-[1px] border-gray-500 rounded-lg text-sm md:text-md h-8 pr-2 lg:h-12 flex items-center justify-between relative">
            {priceListMaxShow ? (
              <input
                className="w-full h-full rounded-md px-2 outline-none"
                value={priceListMaxSearch}
                onChange={(e) => setPriceMaxListSearch(e.target.value)}
              />
            ) : (
              <label
                className="w-full h-full flex items-center  cursor-pointer pl-2"
                onClick={handlePriceMaxShow}
              >
                {priceMax}
              </label>
            )}
            <FontAwesomeIcon icon={faAngleDown} />
            <div
              className={`absolute cursor-pointer min-h-12 h-fit max-h-48 top-[48px] shadow-xl bg-white w-full overflow-auto border-[2px] border-gray-400 rounded-sm pt-2 z-50 ${
                priceListMaxShow ? "block" : "hidden"
              }`}
            >
              {maxPriceList
                .filter((item) => item.toLowerCase().includes(priceListMaxSearch.toLowerCase()))
                .map((item) => (
                  <p
                    key={item}
                    className="w-full pl-2 h-8 border-t-[1px] border-gray-300 flex items-center bg-white hover:bg-blue-200 z-50 cursor-pointer"
                    onClick={() => handleClickPriceMax(item)}
                  >
                    {item}
                  </p>
                ))}
            </div>
          </div>
          <button
            className="w-full h-[40px] bg-blue-700 rounded-full text-white hover:bg-blue-500 transition-colors duration-300 ease-in-out col-span-2 mt-[10%]"
            onClick={handleBuscarClick}
          >
            BUSCAR
          </button>
        </div>
      {/* </div> */}
    </>
  );
};
export default SearchBox;
