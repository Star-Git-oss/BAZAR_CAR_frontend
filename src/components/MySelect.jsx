import React, { useEffect, useState } from "react";

const DropdownComponent = ({ arrow, selectList, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectItem, setSelectItem] = useState(selectList[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchList, setSearchList] = useState([]);
  // const selectList = ["Uppercase", "Lowercase", "Camel Case"];

  useEffect(() => {
    setSearchList(selectList);
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleSearchInputChange = (event) => {
    let serachword = event.target.value;
    setSearchTerm(serachword);
    setSearchList(
      selectList.filter((item) => {
        return item.toLowerCase().includes(serachword.toLowerCase());
      })
    );
    console.log(
      selectList.filter((item) => {
        return item.toLowerCase().includes(serachword.toLowerCase());
      })
    );
  };

  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="w-full h-full relative group">
        <button
          className={`inline-flex justify-center items-center w-full h-full px-4 py-2 text-sm font-medium text-gray-700 ${
            arrow ? "" : "bg-gradient-to-b from-white to-gray-200"
          } border-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500`}
          onClick={toggleDropdown}
        >
          <span className="flex justify-start md:justify-center items-center text-xs">{selectItem}</span>
          {arrow ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2 -mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <></>
          )}
        </button>
        {isOpen ? (
          <div className="absolute right-0 mt-2 max-h-60 overflow-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 z-50">
            {arrow ? (
              <></>
            ) : (
              <input
                className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
                type="text"
                placeholder="Search items"
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
            )}
            {searchList.map((item) => (
              <div
                key={item}
                onClick={() => {
                  setSelectItem(item);
                  setIsOpen(false);
                  setValue(item);
                }}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default DropdownComponent;
