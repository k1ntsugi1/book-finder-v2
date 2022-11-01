import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import RotateCard from "../../../RotateCard";

import { IProps } from '../interfaces';

const TextStyling: React.FC<IProps> = (props) => {

    const { stateImmer, dispatchImmer } = props;
    const { t } = useTranslation();

    return (
        <RotateCard
            backFaceOfCard={
                <>
                    <Form.Control
                        className="w-75 mx-auto"
                        type="color"
                        name="textColor"
                        value={stateImmer.colors.textColor}
                        onChange={(event) => dispatchImmer({ type: 'updateTextColor', value: event.target.value })}
                        aria-label="select-color"
                    />
                </>
            }
            frontFaceOfCard={
                <Form.Label className='ms-3'>{t("sidebarField.settingSection.styling.stylingItems.text")}</Form.Label>
            }
        />
    )
};

export default TextStyling;