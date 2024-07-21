import axios from "axios"

export const uploadProfileImage = async (formData: FormData) => {
    return axios.post('POST_UPLOAD_IMAGE', formData).then(res => res.data)
}