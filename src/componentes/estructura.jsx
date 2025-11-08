import Titulo from "./titulo";

function Estructura({ children }) {
    return (
        <div className="
        bg-gray-900
        rounded-2xl
        p-4
        hyphens-auto hyphens: auto;
        wrap-break-word
        ">{children}</div>
    );
}

function TemarioAside({ children }) {
    return (
<>
        <aside className="
        hidden 2xl:block
        sticky top-5 self-start
        w-4/5
        min-w-72 max-w-fit
        ">
            <Titulo title="h2" className="select-none">Temario</Titulo>

            {children}
       </aside>
    </>
);
}

export default Estructura;
export { TemarioAside };
