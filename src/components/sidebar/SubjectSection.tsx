import { Form } from 'react-bootstrap';

const SubjectSection: React.FC = () => {
    const categories = [
        'all',
        'art',
        'biography',
        'computers',
        'history',
        'medical',
        'poetry'
    ];
    return (
        <Form.Group>
            <Form.Label>select categories</Form.Label>
            <Form.Select 
                size="sm"
                id="typesOfSubject"
                name="typesOfSubject"
                aria-label="Select category">
            {categories.map(category => {
                return (
                    <option
                        key={category}
                        value={category}>
                        {category}
                    </option>
                )
            })}
            </Form.Select>
        </Form.Group>
    )
}

export default SubjectSection;