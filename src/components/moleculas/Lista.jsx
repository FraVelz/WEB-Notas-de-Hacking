
export default function Lista({ children, type = "ul", className = "" }) {

  if (type == "ol") {
    return (
      <ol
        className={`
    list-inside flex flex-col gap-2
    p-1 my-2 list-decimal
    text-lg text-gray-300 pl-6
    ${className}
  `}
      >
        {children}
      </ol>
    );
  }

  if (type == "ul") {
    return (
      <ul
        className={`
        list-inside flex flex-col gap-2
        p1 list-disc my-2
        text-lg text-gray-300 pl-6
        ${className}
      `}
      >
        {children}
      </ul>
    );
  }
}

