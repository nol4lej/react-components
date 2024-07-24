import { useState } from "react";

interface UseModalReturn {
    showModal: boolean;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
}

/**
 * Gestiona el estado de un modal.
 * 
 * @returns {UseModalReturn} Un objeto que contiene el estado del modal y funciones para abrir y cerrar el modal.
 */
const useModal = (): UseModalReturn => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return {
        showModal,
        handleOpenModal,
        handleCloseModal,
    } as const;

}

export default useModal;