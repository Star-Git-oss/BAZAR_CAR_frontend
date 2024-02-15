const SignInput = ({ label, value, onChange, width, type, x }) => {
  return (
    <div className="flex-col item-left w-full lg:px-4 mb-6 lg:mb-0">
      <p className={`text-sm text-sky-800 w-max ${type === "secondary" ? "": "font-bold"}`}>{x === true ? <span className="font-bold">X </span> : ""}{label}</p>
      <input
        className={`${
          width === "full" || width === undefined ? "w-full" : width
        } h-9 border-[2px] ${
          type === "secondary"
            ? "border-l-0 border-r-0 border-t-0 border-b-2 border-sky-900 focus:border-sky-500 transition-color duration-300 ease-in-out focus:outline-0"
            : "border-sky-800 rounded-md"
        } px-2`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
export default SignInput;
