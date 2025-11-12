
function Dividido({ secundario, children, linea = false }) {
  return (
    <div
      className={`
        px-3
        flex flex-col lg:flex-row
        justify-center items-center
        rounded-2xl
        ${linea ? "border-2 border-gray-400" : "border-0"}
      `}
    >
      <div
        className="
          bg-gray-900
          rounded-2xl
          break-words
          p-4
        "
      >
        {children}
      </div>

      <div className="flex justify-center items-center lg:w-96">
        {secundario}
      </div>
    </div>
  );
}

export default Dividido;

