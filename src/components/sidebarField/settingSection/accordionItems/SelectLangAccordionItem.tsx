import { Accordion, Button } from "react-bootstrap"


const SelectLangAccordionItem: React.FC = () => {
    return (
        <Accordion.Item
            className="border-0"
            eventKey="1"
            style={{ 'background': 'var(--color-sidebar)', 'color': 'var(--color-text)' }}
        >
            <Accordion.Header className="p-0 ms-3">Language</Accordion.Header>
            <Accordion.Body className="d-flex flex-column">

                <Button variant="" className="wrapperOfRunnerBorderBottom">
                    <div>RU</div>
                    <div className='runnerBorderBottom' style={{ 'background': 'var(--color-text)' }}></div>
                </Button>

                <Button variant="" className="wrapperOfRunnerBorderBottom">
                    <div>EN</div>
                    <div className='runnerBorderBottom' style={{ 'background': 'var(--color-text)' }}></div>
                </Button>

            </Accordion.Body>


        </Accordion.Item>
    )
};

export default SelectLangAccordionItem;