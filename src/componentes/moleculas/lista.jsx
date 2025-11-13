
export default function Lista({ children, type = "ul", className = "" }) {

  if (type == "ol") {
    return (
      <ul
        className={`
        list-inside flex flex-col gap-2
        p1 my-2
        text-gray-300 pl-6
        ${className}
      `}
      >
        {children}
      </ul>
    );
  }

  if (type == "ul") {
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
}

