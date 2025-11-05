
function Texto({ children, className = "" }) {
    return (
        <p className={`text-gray-300 select-none ${className}`}>
              {children}
        </p>
    );
}

export default Texto;
