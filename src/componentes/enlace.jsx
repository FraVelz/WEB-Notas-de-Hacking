
function Enlace({ href, children, target="_self" }) {
    return (
        <a href={href} target={target} draggable="false" className="
       text-blue-400 hover:text-blue-500
        select-none underline
        ">
              {children}
        </a>
    );
}

export default Enlace;
