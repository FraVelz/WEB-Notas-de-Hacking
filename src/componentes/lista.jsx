
function Lista({ children, className = "" }) {
  return (
    <ul
      className={`
        list-inside flex flex-col gap-2
        p1 list-disc my-2
        text-gray-300 pl-6
        ${className}
      `}
    >
      {children}
    </ul>
  );
}

function Lista_o({ children, className = "" }) {
  return (
    <ul
      className={`
        list-inside flex flex-col gap-2
        p1 list-disc my-2
        text-gray-300 text-xl pl-6
        ${className}
      `}
    >
      {children}
    </ul>
  );
}


function Lista_d({ children, className = "" }) {
  return (
    <ul
      className={`
        list-inside flex flex-col gap-2
        p1 list-disc my-2
        text-gray-300 text-xl pl-6
        ${className}
      `}
    >
      {children}
    </ul>
  );
}


// Otro componente en el mismo archivo
function Item({ children }) {
  return <li className="text-gray-100">{children}</li>;
}

// Exportaciones
export default Lista; // Exportación principal
export { Item };      // Exportación adicional
