"use client";

import Image from "next/image";
import { FiEdit } from "react-icons/fi";

const EditableImage = ({ imageUrl, onEdit }) => {
    return (
        <div className="relative w-40 h-40">

            <div className="relative w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                <Image
                    src={imageUrl}
                    alt="Product Image"
                    fill
                    className="object-cover"
                />
            </div>

            <button
                onClick={onEdit}
                className="absolute cursor-pointer top-4 right-1 z-50 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
            >
                <FiEdit size={16} className="text-black" />
            </button>

        </div>

    );
};

export default EditableImage;
