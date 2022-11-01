import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import UploadBodyBackgroundImage from "./UploadBodyBackgroundImage";
import SelectBodyColor from "./SelectBodyColor";
import SelectBodyBackground from "./SelectBodyBackground";

import { IProps } from '../../interfaces'; 

const BodyStyling: React.FC<IProps> = (props) => {

    const { stateImmer, dispatchImmer } = props;
    const { t } = useTranslation();

    return (
        <Accordion>
            <Accordion.Item 
                className="background-color-sidebar text-color border-0"
                eventKey="0"
            >
                <Accordion.Header className="p-0 ms-3">{t("sidebarField.settingSection.styling.stylingItems.body.name")}</Accordion.Header>
                <Accordion.Body className='p-0 d-flex flex-column gap-1'>

                    <SelectBodyBackground 
                        stateImmer={stateImmer}
                        dispatchImmer={dispatchImmer}
                    />

                    <UploadBodyBackgroundImage 
                        dispatchImmer={dispatchImmer} 
                    />

                    <SelectBodyColor 
                        stateImmer={stateImmer} 
                        dispatchImmer={dispatchImmer} 
                    />

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default BodyStyling;