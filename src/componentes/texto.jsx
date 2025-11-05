
function Texto({ children, className = "", select="auto" }) {
    return (
        <p className={`
        text-gray-300
        select-${select}
        ${className}
        text-lg
        `}>
              {children}
        </p>
    );
}

export default Texto;
