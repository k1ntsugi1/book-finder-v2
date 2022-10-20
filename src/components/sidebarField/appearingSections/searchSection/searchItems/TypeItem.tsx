import { Form } from 'react-bootstrap';
import { ISearchItemsProps } from '../interfaces';

import { useContextOfSearchOprions } from '../context/useContextOfSearchOptions';

const TypeItem: React.FC<ISearchItemsProps> = (props) => {
    
    const { values: { currentTypeOfItem }, handleChange } = props.formik;
    const { typesOfItem } = useContextOfSearchOprions();

    return (
        <Form.Group>
            <Form.Label>select type</Form.Label>
            <Form.Select
                size="sm"
                name="currentTypeOfItem"
                value={currentTypeOfItem}
                onChange={handleChange}
                aria-label="Select type of item">
            {typesOfItem.map(typeOfItem => {
                return (
                    <option 
                        key={typeOfItem}
                        value={typeOfItem}>
                        {typeOfItem}
                    </option>
                )
            })}
            </Form.Select>
            
        </Form.Group>
    )
}

export default TypeItem;