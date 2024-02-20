const SignInput = ({
  label,
  value,
  onChange,
  width,
  type,
  x,
  style,
  placeholder,
}) => {
  return (
    <div
      className={`flex-col item-left w-full lg:px-4 lg:mb-0 ${style} ${
        type === "outlined" ? "border-[1px] p-4 border-gray-300 rounded-xl" : ""
      }`}
    >
      <p
        className={`text-sm text-blue-800 w-max ${
          type === "secondary" ? "" : "font-bold"
        }`}
      >
        {x === true ? <span className="font-bold">X </span> : ""}
        {label}
      </p>
      <input
        className={`${
          width === "full" || width === undefined ? "w-full" : width
        } h-9 border-[2px] ${
          type === "secondary"
            ? // ? "border-l-0 border-r-0 border-t-0 border-b-2 border-blue-900 focus:border-blue-500 transition-color duration-300 ease-in-out focus:outline-0"
              "border-blue-900 rounded-md focus:border-blue-500 transition-color duration-300 ease-in-out focus:outline-0"
            : type === "outlined"
            ? "border-blue-black focus:border-black border-[1px] focus:outline-0"
            : "border-blue-800 rounded-md focus:border-blue-900 focus:outline-0"
        } px-2`}
        value={value}
        placeholder={placeholder}
        type={type === "password" ? "password" : "text"}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
export default SignInput;
