import Titulo from "../moleculas/titulo";

function Estructura({ children }) {
  return (
    <div className="
        bg-gray-900
        rounded-2xl
        h-fit
        min-w-2/4
        hyphens-auto hyphens: auto;
        wrap-break-word
        p-4
        ">{children}</div>
  );
}

function TemarioAsideCompleto({ children, temario: Temario }) {
  return (
    <aside className="
        hidden 2xl:block
        sticky top-5 self-start

        w-4/5 min-w-72
        ">
      <Titulo title="h2" className="select-none">Temario</Titulo>

      <Temario
        className={`
        bg-gray-900
        rounded-md
        p-4 mb-4
        list-decimal

        h-fit
        max-h-[80vh]     /* altura máxima del 80% del viewport */
        overflow-y-auto  /* scroll vertical */
        `}
      >
        {children}
      </Temario>

      {children}
    </aside>
  );
}

function TemarioCompleto({ temario: Temario }) {
  return (
    <>
      <Titulo title="h2" className="2xl:hidden">Temario</Titulo>

      <Temario className="
      bg-gray-900
      rounded-md
      p-4 mb-4
      list-decimal
      2xl:hidden
      " />
    </>
  );
}

export default Estructura;
export { TemarioAsideCompleto, TemarioCompleto };
