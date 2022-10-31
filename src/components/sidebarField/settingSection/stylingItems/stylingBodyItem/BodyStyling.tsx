import { Accordion } from "react-bootstrap";

import UploadBodyBackgroundImage from "./UploadBodyBackgroundImage";
import SelectBodyColor from "./SelectBodyColor";
import SelectBodyBackground from "./SelectBodyBackground";

import { IStylingItemProps } from "../../interfaces";
import { useTranslation } from "react-i18next";

const BodyStyling: React.FC<IStylingItemProps> = (props) => {

    const { stateImmer, dispatchImmer, classNamesOfRotatingCard } = props;
    const { t } = useTranslation();

    return (
        <Accordion>
            <Accordion.Item 
                className="background-color-sidebar text-color border-0"
                eventKey="0"
                // style={{ 'background': 'var(--color-sidebar)', 'color': 'var(--color-text)' }}
            >
                <Accordion.Header className="p-0 ms-3">{t("sidebarField.settingSection.styling.stylingItems.body.name")}</Accordion.Header>
                <Accordion.Body className='p-0 d-flex flex-column gap-1'>

                    <SelectBodyBackground 
                        stateImmer={stateImmer}
                        dispatchImmer={dispatchImmer}
                    />

                    <UploadBodyBackgroundImage 
                        dispatchImmer={dispatchImmer} 
                        classNamesOfRotatingCard={classNamesOfRotatingCard}
                    />

                    <SelectBodyColor 
                        stateImmer={stateImmer} 
                        dispatchImmer={dispatchImmer} 
                        classNamesOfRotatingCard={classNamesOfRotatingCard}
                    />

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default BodyStyling;