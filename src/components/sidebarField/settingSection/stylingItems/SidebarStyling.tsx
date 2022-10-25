import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import RotateCard from "../../../RotateCard";
import { IStylingItemProps } from "../interfaces";

const SidebarStyling: React.FC<IStylingItemProps> = (props) => {

    const { stateImmer, dispatchImmer, classNamesOfRotatingCard } = props;
    const { t } = useTranslation();
    return (
        <RotateCard
            classnames={classNamesOfRotatingCard}
            backFaceOfCard={
                <Form.Control
                    className="w-75 mx-auto"
                    type="color"
                    name="sidebarColor"
                    value={stateImmer.colors.sideBarColor}
                    onChange={(event) => dispatchImmer({ type: 'updateSidebarColor', value: event.target.value })}
                    aria-label="select-color"
                />
            }
            frontFaceOfCard={
                <Form.Label className='ms-3'>{t("sidebarField.settingSection.styling.stylingItems.sidebar")}</Form.Label>
            }
        />
    )
};

export default SidebarStyling;