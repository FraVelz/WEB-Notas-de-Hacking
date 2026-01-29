import Titulo from "../moleculas/Titulo";

function Estructura({ children }) {
  return (
    <article className="
        bg-transparent
        flex-1
        min-w-0
        hyphens-auto
        break-words
        p-6 lg:p-8
        ">{children}</article>
  );
}

function EstructuraMain({ children }) {
  return (
    <main className="
        bg-gray-900
        flex-1
        overflow-y-auto
        min-w-2/4
        hyphens-auto
        break-words
        p-6 lg:p-8
        ">{children}</main>
  );
}


function TemarioAsideCompleto({ children, temario: Temario }) {
  return (
    <aside className="
        hidden 2xl:flex
        flex-col
        self-start
        sticky top-4
        w-4/5 min-w-72 max-w-xs
        ml-4
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
export { EstructuraMain, TemarioAsideCompleto, TemarioCompleto };
