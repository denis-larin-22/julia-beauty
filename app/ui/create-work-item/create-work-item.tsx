'use client'
import { ChangeEvent, useState } from "react";
import { addImagesToStorage, addNewWorkToFirestoreDB } from "../../lib/firebase/gallery";
import { _getId } from "../../lib/_utils/_getId";
import { IWorkInfo, ImagesArray } from "../../lib/types/definitions";

export default function CreateWorkItem() {
    const initInputsWorkInfo: IWorkInfo = {
        name: '',
        description: ''
    };

    const [workInfo, setWorkInfo] = useState<IWorkInfo>(initInputsWorkInfo);
    const [imagesBefore, setImagesBefore] = useState<ImagesArray>([]);
    const [imagesAfter, setImagesAfter] = useState<ImagesArray>([]);

    const handleImagesInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        mark: 'before' | 'after'
    ) => {
        if (e.target.files && mark === 'before') {
            setImagesBefore([...imagesBefore, e.target.files[0]]);
        } else if (e.target.files && mark === 'after') {
            setImagesAfter([...imagesAfter, e.target.files[0]]);
        }
    };

    const btnHandler = () => {
        const id: string = _getId();

        addNewWorkToFirestoreDB(workInfo, id);
        addImagesToStorage(imagesBefore, imagesAfter, id);
    }

    return (
        <div className="flex flex-col items-center justify-center border-2 border-t-brown">
            <label htmlFor="name">Work name:</label>
            <input
                type="text"
                id="name"
                className="border-2 border-t-brown"
                value={workInfo.name}
                onChange={(e) => setWorkInfo({ ...workInfo, name: e.target.value })}
            />

            <label htmlFor="deskription">Work deskription:</label>
            <textarea
                id="deskription"
                cols={30}
                rows={10}
                className="border-2 border-t-brown"
                value={workInfo.description}
                onChange={(e) => setWorkInfo({ ...workInfo, description: e.target.value })}
            ></textarea>
            {/* Before */}
            <p className="">Фото "ДО":</p>
            {[1, 2, 3, 4, 5].map((item, index) => (
                <input
                    key={index}
                    type="file"
                    onChange={(e) => handleImagesInputChange(e, 'before')}
                />
            ))}

            <p className="">Фото "ПICЛЯ":</p>
            {[1, 2, 3, 4, 5].map((item, index) => (
                <input
                    key={index}
                    type="file"
                    onChange={(e) => handleImagesInputChange(e, 'after')}
                />
            ))}
            <button className="" onClick={btnHandler}>OK</button>
        </div>
    )
}