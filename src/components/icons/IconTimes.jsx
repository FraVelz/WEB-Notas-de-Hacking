/**
 * Icono de cerrar/eliminar (solid)
 * Reemplazo de FontAwesome faTimes
 * Usa stroke="currentColor" para heredar el color del texto
 */
export default function IconTimes({ className = "", size = "1em" }) {
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
      aria-label="Cerrar"
    >
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}
