import { Accordion, Button } from "react-bootstrap";

const SelectProgressBarAccordionItem: React.FC = () => {
    return (
        <Accordion.Item
            className="border-0"
            eventKey="2"
            style={{ 'background': 'var(--color-sidebar)', 'color': 'var(--color-text)' }}
        >
            <Accordion.Header className="p-0 ms-3">Progress bar</Accordion.Header>
            <Accordion.Body className="d-flex flex-column">

                <Button variant="" className="wrapperOfRunnerBorderBottom">
                    <div>Straight</div>
                    <div className='runnerBorderBottom' style={{ 'background': 'var(--color-text)' }}></div>
                </Button>
                <Button variant="" className="wrapperOfRunnerBorderBottom">
                    <div>Circle</div>
                    <div className='runnerBorderBottom' style={{ 'background': 'var(--color-text)' }}></div>
                </Button>

            </Accordion.Body>


        </Accordion.Item>
    )
};

export default SelectProgressBarAccordionItem;