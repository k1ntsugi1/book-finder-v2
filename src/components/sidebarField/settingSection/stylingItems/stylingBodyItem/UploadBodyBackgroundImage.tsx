import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Form, Button } from "react-bootstrap";
import RotateCard from "../../../../RotateCard"

import fetchPostImage from "../../../../../utils/fetchPostImage";
import { IDispatchImmer } from "../../interfaces"

import UploadSVGElement from "../../../../SVGElements/UploadSVGElement";


const UploadBodyBackgroundImage: React.FC<{dispatchImmer: IDispatchImmer}> = (props) => {

    const { dispatchImmer } = props;
    const { t } = useTranslation();
    const uploadFileRef = useRef<HTMLInputElement>(null);

    return (
        <RotateCard
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