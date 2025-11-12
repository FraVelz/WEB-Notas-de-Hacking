export const Tabla = ({ children, className = "" }) => {
  return (
    <div className="
    h-fit
    overflow-x-auto
    rounded-xl border border-gray-400
    ">
      <table
        className={`
        w-full text-left
        border-collapse border border-gray-800
        bg-gray-800
        ${className}
        `} >
        {children}
      </table>
    </div>
  );
};

export const TablaCabezera = ({ headers = [] }) => {
  return (
    <thead className="
    bg-gray-950 text-gray-400
    uppercase text-sm font-semibold
    ">
      <tr>
        {headers.map((header, i) => (
          <th key={i} className="
          px-4 py-3
          ">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export const TablaFila = ({ children, hover = true }) => {
  return (
    <tr
      className={`${
        hover ? "hover:bg-gray-700 transition-colors" : ""
      } text-gray-300`}
    >
      {children}
    </tr>
  );
};

export const TablaUnica = ({ children, align = "left" }) => {
  return (
    <td
    className={`
    px-4 py-2
    border-b border-gray-600
    text-${align} text-sm
    `}>
      {children}
    </td>
  );
};

export default function EjemploTabla() {
  const headers = ["Nombre", "Correo", "Rol", "Estado"];
  const data = [
    { name: "Carlos Pérez", email: "carlos@example.com", role: "Admin", status: "Activo" },
    { name: "Laura Gómez", email: "laura@example.com", role: "Editor", status: "Inactivo" },
  ];

  return (
    <Table className="max-w-4xl mx-auto">
      <TableHeader headers={headers} />
      <tbody>
        {data.map((user, i) => (
          <TableRow key={i}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  user.status === "Activo"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {user.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}
