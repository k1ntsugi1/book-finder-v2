import { Form } from 'react-bootstrap';
import { ISearchItemsProps } from '../interfaces';

import { useContextOfSearchOprions } from '../context/useContextOfSearchOptions';

const SubjectItem: React.FC<ISearchItemsProps> = (props) => {

    const { values: { currentTypeOfCategory },  handleChange } = props.formik;
    const { typesOfCategory } = useContextOfSearchOprions();

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

export default SubjectItem;