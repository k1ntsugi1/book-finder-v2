import { Form } from 'react-bootstrap';

const SearchSection: React.FC = () => {
    return (
        <>
            <Form.Group>
                <Form.Label>Enter Book-name</Form.Label>
                <Form.Control type="text" placeholder="enter Book-name" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter Author</Form.Label>
                <Form.Control type="text" placeholder="enter author" />
            </Form.Group>
        </>
    )
}

export default SearchSection;