import { useTranslation } from 'react-i18next';
import { Form } from 'react-bootstrap';
import { ISearchItemsProps } from '../interfaces';

const EnterSearchItems: React.FC<ISearchItemsProps> = (props) => {
  const {
    formik: {
      values: { currentNameOfItem, currentAuthorOfItem },
      errors,
      handleChange
    },
    className
  } = props;

  const { t } = useTranslation();

  return (
    <>
      <Form.Group className={className}>
        <Form.Label>{t('sidebarField.searchSection.labels.item')}</Form.Label>
        <Form.Control
          type="text"
          name="currentNameOfItem"
          value={currentNameOfItem}
          onChange={handleChange}
          aria-label="searchByName"
          placeholder={t('sidebarField.searchSection.placeholders.item')}
          isInvalid={!!errors.currentNameOfItem}
        />
      </Form.Group>

      <Form.Group className={className}>
        <Form.Label>{t('sidebarField.searchSection.labels.author')}</Form.Label>
        <Form.Control
          type="text"
          name="currentAuthorOfItem"
          value={currentAuthorOfItem}
          onChange={handleChange}
          aria-label="searchByAuthor"
          placeholder={t('sidebarField.searchSection.placeholders.author')}
        />
      </Form.Group>
    </>
  );
};

export default EnterSearchItems;
