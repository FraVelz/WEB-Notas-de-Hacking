
function Enlace({ href, children, target="_self", className }) {
    return (
        <a href={href} target={target} draggable="false" className={`
       text-blue-400 hover:text-blue-500
        select-none underline
        ${className}
        `}>
              {children}
        </a>
    );
}

export default Enlace;
