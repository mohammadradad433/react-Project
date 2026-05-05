export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="
        w-full max-w-md p-6 rounded-xl shadow-lg relative
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        ">

        {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute top-2 right-3
            text-gray-500 hover:text-black
            dark:text-gray-300 dark:hover:text-white
          "
        >
          ✕
        </button>

        {children}

      </div>
    </div>
  );
}