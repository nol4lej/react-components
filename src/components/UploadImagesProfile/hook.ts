import { useState } from "react";
import { MessageProps } from "./types";
import { uploadProfileImage } from "./service";

export const useUploadImage = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<MessageProps | null>(null);

    const uploadImage = async (id: string, file: File) => {
        setLoading(true);
        try {

            const formData = new FormData();
            formData.append('id', id);
            formData.append('file', file);

            const response = await uploadProfileImage(formData);

            setMessage({ color: 'green', text: 'Imagen cargada satisfactoriamente' });
            return response.photo_url

        } catch (error) {
            console.error(error);
            setMessage({ color: 'red', text: 'Error al subir una imagen' });
        } finally {
            setLoading(false);
        }
    };

    return { loading, message, setMessage, uploadImage };
};