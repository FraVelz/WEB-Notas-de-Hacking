
function Enlace({ href, children, target="_blank" }) {
    return (
        <a href={href} target={target} draggable="false" className="
        select-none; text-gray-400 hover:text-gray-100
        underline
        ">
              {children}
        </a>
    );
}

export default Enlace;
