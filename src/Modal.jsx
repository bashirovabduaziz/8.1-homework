import { useState } from "react";

function Modal({ isOpen, onClose, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    onDelete(); // Ma'lumotni o'chirish funktsiyasini chaqirish
    onClose(); // Modalni yopish
  };

  const handleClose = () => {
    onClose(); // Modalni yopish
  };

  const handleOuterClick = (e) => {
    // Ekrandagi qattiq hududga bosilgan xoxlagan joyi tekshirish
    if (e.target === e.currentTarget) {
      onClose(); // Modalni yopish
    }
  };
 

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
          onClick={handleOuterClick}
        >
          <div className="bg-white rounded-lg overflow-hidden w-[500px] h-[300px] relative">
            <button
              className="absolute top-0 right-0  w-[40px] h-[40px] text-[25px] flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full"
              onClick={handleClose}
            >
              x
            </button>
            <div className="p-4 flex items-center flex-col">
              <h2 className="text-lg text-[30px] font-semibold mb-4 mt-3 m-auto">
                O'chirishni tasdiqlang
              </h2>
              <p className="text-gray-700 text-[25px] mb-10">
                Haqiqatan ham o'chirmoqchimisiz?
              </p>
              <div className="flex justify-end gap-4">
                <button
                  className="mr-2 px-10 py-4 bg-red-500 hover:bg-red-600 text-white rounded-[20px]"
                  onClick={handleDelete}
                  disabled={isDeleting}
                >
                  {isDeleting ? "O'chirilyapti..." : "O'chirish"}
                </button>
                <button
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-[20px]"
                  onClick={handleClose}
                  disabled={isDeleting}
                >
                  Bekor qilish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
