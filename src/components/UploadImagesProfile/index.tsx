import ImageInput from "./componente"

export default function UploadImagesProfile() {

    const user = {
        id: '1',
        phoro_url: '/avatar.png'
    }

    const addToNewEntity = (imageData: any) => {
        console.log('Datos de imagen capturados:', imageData);
    }

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                React Components
            </h1>
            <div>
                <ImageInput entityUrl={user?.phoro_url} entityId={user?.id} onImageUpload={addToNewEntity} />
            </div>
        </>
    )
}