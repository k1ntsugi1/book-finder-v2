import { Form } from 'react-bootstrap';
import { Props } from '../FormSection';

const SubjectSection: React.FC<Props> = (props) => {
    const { values: { currentTypeOfCategory },  handleChange } = props.formik;
    const typesOfCategory = [
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
                name="currentTypeOfCategory"
                value={currentTypeOfCategory}
                onChange={handleChange}
                aria-label="Select category of item">
            {typesOfCategory.map(typeOfCategory => {
                return (
                    <option
                        key={typeOfCategory}
                        value={typeOfCategory}>
                        {typeOfCategory}
                    </option>
                )
            })}
            </Form.Select>
        </Form.Group>
    )
}

export default SubjectSection;