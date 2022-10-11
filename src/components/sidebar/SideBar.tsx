import { Accordion, Button, ListGroup, InputGroup, Form } from "react-bootstrap"
import cn from 'classnames';

import SearchSection from "./SearchSection";
import SubjectSection from "./SubjectSection";
import FilteringSection from "./FilteringSection";
import TypeSection from "./TypeSection";

interface SidebarProps {
    showStateOfSidebar: string,
    setNewShowStateOfSidebar: (value: string) => void,
};

const Sidebar: React.FC<SidebarProps> = (props) => {
    const { showStateOfSidebar, setNewShowStateOfSidebar } = props;

    const classnamesOfPlaceholder = cn('m-auto', 'text-light', {
        'd-block': showStateOfSidebar === 'visible' ? false : true,
        'd-none': showStateOfSidebar === 'visible' ? true : false,
    });

    const classnamesOfAccordion = cn('bg-transparent', {
        'd-block': showStateOfSidebar === 'visible' ? true : false,
        'd-none': showStateOfSidebar === 'visible' ? false : true,
    });

    return (
        <>
            <div className="back-face-of-glass b-rad-10" style={{background: 'transparent'}}></div>
            <div className="d-flex flex-column justify-content-between front-face-of-glass">
                <ListGroup className={classnamesOfAccordion}>

                    <ListGroup.Item className="bg-transparent">
                        <SearchSection />
                    </ListGroup.Item>

                    <ListGroup.Item className="bg-transparent">
                        <SubjectSection />
                    </ListGroup.Item>

                    <ListGroup.Item className="bg-transparent">
                        <FilteringSection />
                    </ListGroup.Item>

                    <ListGroup.Item className="bg-transparent">
                        <TypeSection />
                    </ListGroup.Item>

                    <ListGroup.Item className="d-flex justify-content-center bg-transparent">
                        <Button className="bg-transparent border-0">reset all params</Button>
                    </ListGroup.Item>

                </ListGroup>
            
                <div className={classnamesOfPlaceholder}>
                    <div>O</div>
                    <div>P</div>
                    <div>T</div>
                    <div>I</div>
                    <div>O</div>
                    <div>N</div>
                    <div>S</div>
                </div>

                <input
                    name="toggler"
                    type="checkbox"
                    className="mb-3 mx-auto"
                    checked={showStateOfSidebar === 'visible' ? true : false}
                    onChange={() => {
                        return showStateOfSidebar === 'visible'
                            ? setNewShowStateOfSidebar('unvisible')
                            : setNewShowStateOfSidebar('visible')
                    }} />
                
            </div>
        </>
    )
}

export default Sidebar;