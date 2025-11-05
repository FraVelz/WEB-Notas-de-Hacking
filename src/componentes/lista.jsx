
function Lista({ children, className = "" }) {
    return (
        <ul className={`
        text-gray-300
        list-inside flex flex-col gap-2
        pl-6
        ${className}
        `}>
              {children}
        </ul>
    );
}

export default Lista;
