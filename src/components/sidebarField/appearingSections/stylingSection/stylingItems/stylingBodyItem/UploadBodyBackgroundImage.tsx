import { useRef } from "react";
import { Form } from "react-bootstrap";
import RotateCard from "../../../../../RotateCard"

import { IUploadBodyBackgroundImage } from "../../interfaces"
import fetchUploadImage from "../../../../../../helpersFunc/fetchUploadImage";

const UploadBodyBackgroundImage: React.FC<IUploadBodyBackgroundImage> = (props) => {
    
    const { dispatchImmer, classNamesOfRotatingCard } = props;

    const uploadFileRef = useRef<HTMLInputElement>(null);

    return (
        <RotateCard
            classnames={classNamesOfRotatingCard}
            backFaceOfCard={
                <Form.Control
                    className="w-75"
                    type="file"
                    name="image"
                    accept="image/png, image/jpeg, image/jpg"
                    ref={uploadFileRef}
                    onChange={async () => {
                        if (!uploadFileRef.current?.files) { return; }
                        const file = uploadFileRef.current.files[0];
                        const value = await fetchUploadImage(file);
                        dispatchImmer({ type: 'updateBodyImages', value })
                    }}
                />
            }
            frontFaceOfCard={
                <Form.Label>Add-background-image</Form.Label>
            }
        />
    )
};

export default UploadBodyBackgroundImage;