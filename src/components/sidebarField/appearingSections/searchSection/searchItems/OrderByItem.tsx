import { Form } from 'react-bootstrap';
import { ISearchItemsProps } from '../interfaces';

import { useContextOfSearchOprions } from '../context/useContextOfSearchOptions';

const OrderByItem: React.FC<ISearchItemsProps> = (props) => {
    
    const { 
            formik: { 
                values: { currentTypeOfOrder },  handleChange
            },
            className 
        } = props;
        
    const { typesOfOrder } = useContextOfSearchOprions();

    return (
        <Form.Group className={className}>
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

export default OrderByItem;