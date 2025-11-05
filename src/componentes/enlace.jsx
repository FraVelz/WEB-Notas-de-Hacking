
function Enlace({ href, children, target="_blank" }) {
    return (
        <a href={href} target={target} className="select-none" draggable="false">
              {children}
        </a>
    );
}

export default Enlace;
