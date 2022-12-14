import { useTranslation } from 'react-i18next';
import { Form } from 'react-bootstrap';
import { ISearchItemsProps } from '../interfaces';

import { useContextOfSearchOprions } from '../context/useContextOfSearchOptions';

const SelectCategoryOfItem: React.FC<ISearchItemsProps> = (props) => {
  const {
    formik: {
      values: { currentTypeOfCategory },
      handleChange
    },
    className
  } = props;
  const { typesOfCategory } = useContextOfSearchOprions();
  const { t } = useTranslation();
  return (
    <Form.Group className={className}>
      <Form.Label>{t('sidebarField.searchSection.labels.category')}</Form.Label>
      <Form.Select
        size="sm"
        name="currentTypeOfCategory"
        value={currentTypeOfCategory}
        onChange={handleChange}
        aria-label="Select category of item"
      >
        {typesOfCategory.map((typeOfCategory) => {
          return (
            <option key={typeOfCategory} value={typeOfCategory}>
              {typeOfCategory}
            </option>
          );
        })}
      </Form.Select>
    </Form.Group>
  );
};

export default SelectCategoryOfItem;
