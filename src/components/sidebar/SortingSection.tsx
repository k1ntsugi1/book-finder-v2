import { Form } from 'react-bootstrap';
import { Props } from '../FormSection';

const SortingSection: React.FC<Props> = (props) => {
    const { values: { currentTypeOfSort },  handleChange } = props.formik;
    const typesOfSort = [
        'newest',
        'relevance',
    ];
    return (
        <Form.Group>
            <Form.Label>select type of sort</Form.Label>
            <Form.Select
                size="sm"
                name="currentTypeOfSort"
                value={currentTypeOfSort}
                onChange={handleChange}
                aria-label="Select type of book">
            {typesOfSort.map(typeOfSort => {
                return (
                    <option 
                        key={typeOfSort}
                        value={typeOfSort}>
                        {typeOfSort}
                    </option>
                )
            })}
            </Form.Select>
            
        </Form.Group>
    )
}

export default SortingSection;