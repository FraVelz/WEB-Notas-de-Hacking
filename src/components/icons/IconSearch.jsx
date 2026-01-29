/**
 * Icono de búsqueda (solid)
 * Reemplazo de FontAwesome faSearch
 * Usa stroke="currentColor" para heredar el color del texto
 */
export default function IconSearch({ className = "", size = "1em" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Buscar"
    >
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  );
}
