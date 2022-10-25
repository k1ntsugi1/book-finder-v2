import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import RotateCard from "../../../../RotateCard"

import { IUploadBodyBackgroundImage } from "../../interfaces"
import fetchPostImage from "../../../../../helpersFunc/fetchPostImage";

import UploadSVGElement from "../../../../SVGElements/UploadSVGElement";
import { useTranslation } from "react-i18next";

const UploadBodyBackgroundImage: React.FC<IUploadBodyBackgroundImage> = (props) => {

    const { dispatchImmer, classNamesOfRotatingCard } = props;
    const { t } = useTranslation();
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
                            const value = await fetchPostImage(file);
                            dispatchImmer({ type: 'updateBodyImages', value })
                        }}
                    />
                    <Button variant="" className="w-100" onClick={() => uploadFileRef.current!.click()}>
                        <UploadSVGElement width="16" height="16"/>
                    </Button>
                </>

            }
            frontFaceOfCard={
                <>

                    <Form.Label className="ms-3">{t("sidebarField.settingSection.styling.stylingItems.body.uploadImageBtn")}</Form.Label>
                </>
            }
        />
    )
};

export default UploadBodyBackgroundImage;