import { Form } from 'react-bootstrap';

const TypeSection: React.FC = () => {
    const typesOfBooks = [
        'all',
        'books',
        'magazines'
    ];
    return (
        <Form.Group>
            <Form.Label>select type</Form.Label>
            <Form.Select
                size="sm"
                id="typesOfBook"
                name="typesOfBook"
                aria-label="Select type of book">
            {typesOfBooks.map(typeOfBook => {
                return (
                    <option 
                        key={typeOfBook}
                        value={typeOfBook}>
                        {typeOfBook}
                    </option>
                )
            })}
            </Form.Select>
            
        </Form.Group>
    )
}

export default TypeSection;