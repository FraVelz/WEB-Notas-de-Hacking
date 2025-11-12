
function Boton({ children, className=""  }) {
    return (
        <button className={`
        bg-gray-800
        hover:bg-gray-600 hover:text-gray-50
        rounded-full
        cursor-pointer
        px-3 py-0.5
        ${className}
        `}>{children}</button>
    );
}

export default Boton;
