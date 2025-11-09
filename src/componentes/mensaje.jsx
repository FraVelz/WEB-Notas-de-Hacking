
function Mensaje({ children, onClose }) {
    return (
        <div className="
        bg-black/50
        cursor-default
        z-50
        fixed inset-0
        flex items-center
        justify-center
        p-4
        ">
            <div className="
            bg-gray-900
            rounded-2xl border-2 border-gray-700
            hover:border-gray-600
            lg:w-2/4
            
            p-6 shadow-lg text-center
            ">
                <div className="max-w-screen p-4">
                    {children}
                </div>

                <button
                onClick={onClose}
                className="
                bg-gray-700 hover:bg-gray-500
                text-gray-300
                cursor-pointer
                px-4 py-2
                rounded-lg
                transition
                "
                >Cerrar</button>
            </div>
        </div>
    );
}

export default Mensaje;
