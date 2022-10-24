import { Form } from 'react-bootstrap';
import { ISearchItemsProps } from '../interfaces';

import { useContextOfSearchOprions } from '../context/useContextOfSearchOptions';

const SelectFilterOfItem: React.FC<ISearchItemsProps> = (props) => {
    
    const { 
            formik: {
                values: { currentTypeOfFilter },
                handleChange
            },
            className
        } = props;
    const { typesOfFilter } = useContextOfSearchOprions();

    return (
        <Form.Group className={className}>
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

export default SelectFilterOfItem