import { Accordion } from "react-bootstrap";
import cn from 'classnames'

import BodyStyling from '../stylingItems/stylingBodyItem/BodyStyling';
import SidebarStyling from '../stylingItems/SidebarStyling';
import TextStyling from '../stylingItems/TextStyling';
import ProgressBarStyling from '../stylingItems/ProgressBarStyling';

import { IStylingItemProps, IActionOfReducerImmer } from "../interfaces";


const SelectParamsOfStylingAccordionItem: React.FC<IStylingItemProps> = (props) => {

    const { stateImmer, dispatchImmer } = props;

    const stylingItems = [
        BodyStyling,
        SidebarStyling,
        TextStyling,
        ProgressBarStyling
    ]

    const classNamesOfRotatingCard = cn('')

    return (
        <Accordion.Item
            className="border-0"
            eventKey="0"
            style={{ 'background': 'var(--color-sidebar)', 'color': 'var(--color-text)' }}
        >
            <Accordion.Header className="p-0 ms-3">Styling</Accordion.Header>
            <Accordion.Body className="d-flex flex-column">
                <div className='d-flex flex-column border-bottom gap-1'>
                    {stylingItems.map((StylingItem, index) => (
                        <StylingItem
                            key={index}
                            stateImmer={stateImmer}
                            dispatchImmer={dispatchImmer}
                            classNamesOfRotatingCard={classNamesOfRotatingCard}
                        />
                    ))}
                </div>

            </Accordion.Body>


        </Accordion.Item>
    )
};

export default SelectParamsOfStylingAccordionItem;