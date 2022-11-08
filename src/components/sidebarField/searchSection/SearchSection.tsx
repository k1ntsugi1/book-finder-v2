import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import type { FormikProps } from 'formik';
import { Button, Form } from 'react-bootstrap';

import fetchDataBySearchingOptions from '../../../store/asyncThunks/fetchGetDataBySearchingOptions';
import { useAppDispatch } from '../../../store/hooks';

import { actionsDataOfSearchedItems } from '../../../store/slices/dataOfSearchedItemsSlice';
import { actionsUiActiveSectionOfSidebar } from '../../../store/slices/uiActiveSectionOfSidebarSlice';
import { actionsUiNotification } from '../../../store/slices/uiNotificationSlice';
import validationSchema from './validationSchema';

import { IInitialValueOfFormik } from './interfaces';

import ProviderOfSearchOptions from './context/ProviderOfSearchOptions';

import EnterSearchItems from './searchItems/EnterSearchItems';
import SelectCategoryOfItem from './searchItems/SelectCategoryOfItem';
import SelectOrderTypeOfItem from './searchItems/SelectOrderTypeOfItem';
import SelectFilterOfItem from './searchItems/SelectFilterOfItem';
import SelectTypeOfItem from './searchItems/SelectTypeOfItem';

import RunnerBorderBottom from '../../RunnerBorderBottom';

import toggleVisibility from '../../../utils/toggleVisibility';

const SearchSection: React.FC<{ showStateOfForm: string }> = (props) => {
  const { showStateOfForm } = props;

  const { t } = useTranslation();
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const formItems = [
    EnterSearchItems,
    SelectCategoryOfItem,
    SelectOrderTypeOfItem,
    SelectFilterOfItem,
    SelectTypeOfItem
  ];

  const classnamesOfItems = cn('ms-3 w-75 bg-transparent border-0 px-0');

  const classnamesOfFormSection = cn(
    'background-color-sidebar',
    'pt-3',
    'h-100',
    'w-appeating-section',
    'transitionOpacity',
    'position-absolute',
    'start-100',
    'top-0',
    'overflow-auto',
    'scrollbar',
    {
      'opacity-100 ': showStateOfForm === 'visible' ? true : false,
      'opacity-0 ': showStateOfForm === 'visible' ? false : true
    }
  );

  const formik: FormikProps<IInitialValueOfFormik> = useFormik<IInitialValueOfFormik>({
    initialValues: {
      currentNameOfItem: '',
      currentAuthorOfItem: '',
      currentTypeOfCategory: 'all',
      currentTypeOfOrder: 'relevance',
      currentTypeOfItem: 'books',
      currentTypeOfFilter: 'full'
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      const { currentNameOfItem, currentAuthorOfItem } = values;
      const searchParams = {
        ...values,
        currentNameOfItem: currentNameOfItem.trim(),
        currentAuthorOfItem: currentAuthorOfItem.trim()
      };
      appDispatch(actionsDataOfSearchedItems.removeItems());
      appDispatch(fetchDataBySearchingOptions(searchParams));

      appDispatch(actionsUiActiveSectionOfSidebar.setActivePage({ page: 'result' }));
      appDispatch(actionsUiActiveSectionOfSidebar.removeActiveItemOfOptions());
      navigate('/result');
    }
  });

  useEffect(() => {
    toggleVisibility(formRef, showStateOfForm);
  }, [showStateOfForm]);

  return (
    <ProviderOfSearchOptions>
      <Form
        noValidate
        className={classnamesOfFormSection}
        onSubmit={formik.handleSubmit}
        ref={formRef}
      >
        <div className="color-text d-flex flex-column align-items-start gap-2">
          {formItems.map((Item, index) => (
            <Item key={index} formik={formik} className={classnamesOfItems} />
          ))}
          <div className="mx-auto d-flex flex-column align-items-center">
            <RunnerBorderBottom>
              <Button type="submit" className="w-100 bg-transparent border-0">
                <span>{t('buttons.submit')}</span>
              </Button>
            </RunnerBorderBottom>

            <RunnerBorderBottom>
              <Button
                className="w-100 bg-transparent border-0"
                onClick={() => {
                  formik.resetForm();
                  appDispatch(actionsDataOfSearchedItems.resetSearchParams());
                  appDispatch(
                    actionsUiNotification.show({
                      type: 'success',
                      message: t('notification.reseted')
                    })
                  );
                }}
              >
                <div>{t('buttons.reset')}</div>
              </Button>
            </RunnerBorderBottom>
          </div>
        </div>
      </Form>
    </ProviderOfSearchOptions>
  );
};

export default SearchSection;
