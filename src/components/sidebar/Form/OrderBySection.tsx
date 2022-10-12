import { Form } from 'react-bootstrap';
import { Props } from './FormSection';

const OrderBySection: React.FC<Props> = (props) => {
    const { values: { currentTypeOfOrder },  handleChange } = props.formik;
    const typesOfOrder = [
        'newest',
        'relevance',
    ];
    return (
        <Form.Group>
            <Form.Label>select type of sort</Form.Label>
            <Form.Select
                size="sm"
                name="currentTypeOfOrder"
                value={currentTypeOfOrder}
                onChange={handleChange}
                aria-label="Select type of book">
            {typesOfOrder.map(typeOfOrder => {
                return (
                    <option 
                        key={typeOfOrder}
                        value={typeOfOrder}>
                        {typeOfOrder}
                    </option>
                )
            })}
            </Form.Select>
            
        </Form.Group>
    )
}

export default OrderBySection;