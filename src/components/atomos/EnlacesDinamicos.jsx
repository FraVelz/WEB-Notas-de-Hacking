import { NavLink } from "react-router-dom";
import { useState } from "react";

function EnlaceDinamico({ children, to, className = "" }) {
  const [visited, setVisited] = useState({});

  const handleClick = () => {
    setVisited((prev) => ({ ...prev, [to]: true }));
  };

  return (
    <NavLink
      to={to}
      draggable="false"
      onClick={handleClick}

      className={({ isActive }) => `
        cursor-pointer
        select-none
        transition-all duration-300
        pb-[2px] border-b-2
        ${
          isActive
            ? "border-blue-500" // activo
            : visited[to]
            ? "border-gray-500" // visitado
            : "border-transparent hover:border-gray-400" // normal
        }
        ${className}
      `}
    >
      {children}
    </NavLink>
  );
}

export default EnlaceDinamico;
