import { Accordion } from "react-bootstrap";

import UploadBodyBackgroundImage from "./UploadBodyBackgroundImage";
import SelectBodyColor from "./SelectBodyColor";
import SelectBodyBackground from "./SelectBodyBackground";

import { IStylingItemProps } from "../../interfaces";

const StylingBodyItem: React.FC<IStylingItemProps> = (props) => {
    const { stateImmer, dispatchImmer, classNamesOfRotatingCard } = props;

    return (
        <Accordion>
            <Accordion.Item 
                className="border-0"
                eventKey="0"
                style={{ 'background': 'var(--color-sidebar)', 'color': 'var(--color-text)' }}
            >
                <Accordion.Header className="p-0 ms-3">background</Accordion.Header>
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

export default StylingBodyItem;