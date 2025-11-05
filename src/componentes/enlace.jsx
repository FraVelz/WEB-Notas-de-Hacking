
function Enlace({ href, children, target="_self" }) {
    return (
        <a href={href} target={target} draggable="false" className="
       text-gray-400 hover:text-gray-100
        select-none underline
        ">
              {children}
        </a>
    );
}

export default Enlace;
