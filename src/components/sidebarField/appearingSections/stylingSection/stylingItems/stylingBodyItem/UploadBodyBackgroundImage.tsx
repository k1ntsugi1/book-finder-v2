import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
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
                <>
                    <Form.Control 
                        hidden
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
                    <Button variant="" className="ms-3 ps-0" onClick={() => uploadFileRef.current!.click()}>upload Image</Button>
                </>

            }
            frontFaceOfCard={
                <Form.Label className="ms-3">upload Image</Form.Label>
            }
        />
    )
};

export default UploadBodyBackgroundImage;