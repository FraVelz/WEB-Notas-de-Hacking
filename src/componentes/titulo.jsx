
function Titulo({ title, children, id="" }) {
    if (title=== 'h1') {
        if (id) {
            return <h1 id={id} className="text-4xl font-bold mb-2">{children}</h1>;
        }
        return <h1 className="text-4xl font-bold mb-2">{children}</h1>;

    } else if (title ==='h2') {
        if (id) {
            return <h2 id={id} className="text-3xl font-semibold mb-2">{children}</h2>;
        }
        return <h2 className="text-3xl font-semibold mb-2">{children}</h2>;

    } else if (title === 'h3') {
        if (id) {
            return <h3 id={id} className="text-2xl font-medium mb-2">{children}</h3>;
        }
        return <h3 className="text-2xl font-medium mb-2">{children}</h3>;

    } else {
        return <>{children}</>;
    }
}

export default Titulo;


