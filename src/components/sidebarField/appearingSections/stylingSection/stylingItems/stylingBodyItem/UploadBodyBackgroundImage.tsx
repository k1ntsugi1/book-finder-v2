import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import RotateCard from "../../../../../RotateCard"

import { IUploadBodyBackgroundImage } from "../../interfaces"
import fetchUploadImage from "../../../../../../helpersFunc/fetchUploadImage";
import UploadSVG from '../../../../../../assets/svg/upload.svg'
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
                    <Button variant="" className="w-100" onClick={() => uploadFileRef.current!.click()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                        </svg>
                    </Button>
                </>

            }
            frontFaceOfCard={
                <>

                    <Form.Label className="ms-3">upload Image</Form.Label>
                </>
            }
        />
    )
};

export default UploadBodyBackgroundImage;