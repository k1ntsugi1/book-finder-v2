import { Form } from 'react-bootstrap';
import { ISearchItemsProps } from '../interfaces';

import { useContextOfSearchOprions } from '../context/useContextOfSearchOptions';

const SelectTypeOfItem: React.FC<ISearchItemsProps> = (props) => {
  const {
    formik: {
      values: { currentTypeOfItem },
      handleChange
    },
    className
  } = props;
  const { typesOfItem } = useContextOfSearchOprions();

  return (
    <Form.Group className={className}>
      <Form.Label>select type</Form.Label>
      <Form.Select
        size="sm"
        name="currentTypeOfItem"
        value={currentTypeOfItem}
        onChange={handleChange}
        aria-label="Select type of item"
      >
        {typesOfItem.map((typeOfItem) => {
          return (
            <option key={typeOfItem} value={typeOfItem}>
              {typeOfItem}
            </option>
          );
        })}
      </Form.Select>
    </Form.Group>
  );
};

export default SelectTypeOfItem;
