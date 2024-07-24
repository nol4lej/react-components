import Modal from "./component"
import useModal from "./hook"

export default function ModalComponent() {

    const { showModal, handleCloseModal, handleOpenModal } = useModal()

    return (
        <>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={handleOpenModal}>
                Abrir modal
            </button>

            <Modal show={showModal} onClose={handleCloseModal}>
                <h2 className="text-2xl font-bold mb-6">Modal de ejemplo</h2>
                <div>
                    Esto es un modal de ejemplo
                </div>
            </Modal>
        </>
    )
}