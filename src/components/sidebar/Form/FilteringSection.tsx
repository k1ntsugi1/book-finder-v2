import { Form } from 'react-bootstrap';
import { Props } from './FormSection';

const FilteringSection: React.FC<Props> = (props) => {
    const { values: { currentTypeOfFilter },  handleChange } = props.formik;

    const typesOfFilter = [
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
                size="sm"
                name="currentTypeOfFilter"
                value={currentTypeOfFilter}
                onChange={handleChange}
                aria-label="Select type of filter">
                {typesOfFilter.map(typeOfFilter => {
                    return (
                        <option 
                            key={typeOfFilter}
                            value={typeOfFilter}>
                            {typeOfFilter}
                        </option>
                    )
                })}
            </Form.Select>
        </Form.Group>
    )
}

export default FilteringSection