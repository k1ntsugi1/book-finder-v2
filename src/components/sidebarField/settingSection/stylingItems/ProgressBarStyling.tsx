import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import RotateCard from "../../../RotateCard";
import { IStylingItemProps } from "../interfaces";

const ProgressBarStyling: React.FC<IStylingItemProps> = (props) => {

    const { stateImmer, dispatchImmer, classNamesOfRotatingCard } = props;
    const { t } = useTranslation();

    return (
        <RotateCard
            classnames={classNamesOfRotatingCard}
            backFaceOfCard={
                <Form.Control
                    className="w-75 mx-auto"
                    type="color"
                    name="scrollLoaderColor"
                    value={stateImmer.colors.scrollLoaderColor}
                    onChange={(event) => dispatchImmer({ type: 'updateScrollLoaderColor', value: event.target.value })}
                    aria-label="select-color"
                />
            }
            frontFaceOfCard={
                <Form.Label className='ms-3'>{t("sidebarField.settingSection.styling.stylingItems.progressBar")}</Form.Label>
            }
        />

    )
};

export default ProgressBarStyling;