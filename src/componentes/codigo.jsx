import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";
import "prismjs/themes/prism-twilight.css"; // puedes cambiar el tema

export default function CodeBlock({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // vuelve al estado normal después de 2s
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div className="relative my-4">
      {/* Botón copiar */}
      <button
        onClick={handleCopy}
        className={`
        absolute
        top-2 right-2
        text-xs px-3 py-1
        rounded-md transition-colors
        duration-200
        cursor-pointer
          ${copied ? "bg-gray-700 text-white" : "bg-gray-700 text-gray-200 hover:bg-gray-600"}`}
      >
        {copied ? "¡¡ Copiado !!" : "Copiar"}
      </button>

      {/* Bloque de código */}
      <pre className="rounded-xl bg-gray-900 text-sm overflow-x-auto p-4">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
