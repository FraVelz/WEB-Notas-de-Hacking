
function Imagen({ src, alt, width = 100, height=0, className="" }) {
    if (height === 0) height = width;

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            draggable="false"
            className={className}
        />
    );
}

export default Imagen;
