import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import RotateCard from "../../../../RotateCard";
import { IStylingBodyItemProps } from "../../interfaces";

const SelectBodyColor: React.FC<IStylingBodyItemProps> = (props) => {

    const {stateImmer, dispatchImmer, classNamesOfRotatingCard } = props;
    const { t } = useTranslation();

    return (
        <RotateCard
            classnames={classNamesOfRotatingCard}
            backFaceOfCard={
                <Form.Control
                    className="w-75 mx-auto"
                    type="color"
                    name="bodyColor"
                    value={stateImmer.colors.bodyColor}
                    onChange={(event) => dispatchImmer({ type: 'updateBodyColor', value: event.target.value })}
                    aria-label="select-color"
                />
            }
            frontFaceOfCard={
                <Form.Label className="ms-3">{t("sidebarField.settingSection.styling.stylingItems.body.colorOfBody")}</Form.Label>
            }
        />
    )
};

export default SelectBodyColor;