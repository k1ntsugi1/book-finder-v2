import { Form } from 'react-bootstrap';

const FilteringSection: React.FC = () => {
    const filteringItems = [
        'partial',
        'full',
        'free-ebooks',
        'paid-ebooks',
        'ebooks'
    ];

    return (
        <Form.Group>
            <Form.Label>type of book</Form.Label>
            <Form.Select
                id="filterBooks"
                size="sm"
                name="filterBooks"
                value="partial"
                aria-label="Select type of filter">
                {filteringItems.map(filteringItem => {
                    return (
                        <option 
                            key={filteringItem}
                            value={filteringItem}>
                            {filteringItem}
                        </option>
                    )
                })}
            </Form.Select>
        </Form.Group>
    )
}

export default FilteringSection