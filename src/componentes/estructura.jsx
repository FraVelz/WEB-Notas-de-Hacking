import Titulo from "./titulo";

function Estructura({ children }) {
  return (
    <div className="
        bg-gray-900
        rounded-2xl
        min-w-2/4
        hyphens-auto hyphens: auto;
        wrap-break-word
        p-4
        ">{children}</div>
  );
}

function TemarioAside({ children }) {
  return (
    <>
      <aside className="
        hidden 2xl:block z-0
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

function TemarioAsideCompleto({ children, temario: Temario }) {
  return (
    <TemarioAside>
      <Temario
        className={`
          bg-gray-900
          rounded-md
          p-4 mb-4
          list-decimal
        `}
      >
        {children}
      </Temario>
    </TemarioAside>
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
export { TemarioAside, TemarioAsideCompleto, TemarioCompleto };
