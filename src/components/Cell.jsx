const Cell = ({ label, type, round }) => {
  return (
    <div
      className={`flex flex-col item-left text-white w-full h-14 px-4 justify-center ${
        type === "primary" ? "bg-sky-900" : "bg-sky-500"
      } ${round === true? "rounded-tl-3xl":""}`}
    >
      <p>{label}</p>
      <div className=""></div>
    </div>
  );
};
export default Cell;
