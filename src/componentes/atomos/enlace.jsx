
function Enlace({ href, children, target = "_self", className }) {
    const handleClick = (e) => {
        // If it's an in-page anchor like #temario, scroll to the element instead
        if (href && href.startsWith("#")) {
            e.preventDefault();
            const id = href.slice(1);
            const el = document.getElementById(id) || document.getElementsByName(id)[0];
            if (el) {
                // try to account for a fixed header
                const header = document.querySelector("header");
                const offset = header ? header.offsetHeight + 8 : 8;
                const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: y, behavior: "smooth" });
            } else {
                // no element found — fallback: log for debugging
                console.warn("Anchor target not found:", href);
            }
        }
        // For external links or normal hrefs we let the browser handle it
    };

    return (
        <a
            href={href}
            target={target}
            draggable="false"
            onClick={handleClick}
            className={`
             text-blue-400 hover:text-blue-500
                select-none underline
                ${className}
                `}
        >
            {children}
        </a>
    );
}

export default Enlace;
