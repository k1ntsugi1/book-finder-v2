import { Accordion } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import BodyStyling from '../stylingItems/stylingBodyItem/BodyStyling';
import SidebarStyling from '../stylingItems/SidebarStyling';
import TextStyling from '../stylingItems/TextStyling';
import ProgressBarStyling from '../stylingItems/ProgressBarStyling';

import { IProps } from '../interfaces' 

const SelectParamsOfStylingAccordionItem: React.FC<IProps> = (props) => {

    const { stateImmer, dispatchImmer } = props;

    const { t } = useTranslation();

    const stylingItems = [
        BodyStyling,
        SidebarStyling,
        TextStyling,
        ProgressBarStyling
    ]

    return (
        <Accordion.Item
            className="background-color-sidebar color-text border-0"
            eventKey="0"
        >
            <Accordion.Header className="p-0 ms-3">{t("sidebarField.settingSection.styling.name")}</Accordion.Header>

            <Accordion.Body className="p-0 ps-3 pe-4 d-flex flex-column">
                <div className='d-flex flex-column border-bottom gap-1'>
                    {stylingItems.map((StylingItem, index) => (
                        <StylingItem
                            key={index}
                            stateImmer={stateImmer}
                            dispatchImmer={dispatchImmer}
                        />
                    ))}
                </div>

            </Accordion.Body>

        </Accordion.Item>
    )
};

export default SelectParamsOfStylingAccordionItem;