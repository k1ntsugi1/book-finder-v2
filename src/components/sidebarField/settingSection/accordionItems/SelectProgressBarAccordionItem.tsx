import { useTranslation } from 'react-i18next';
import { Accordion, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { actionsUiProgressBar } from '../../../../store/slices/uiProgressBarSlice';
import { actionsUiNotification } from '../../../../store/slices/uiNotificationSlice';
import RunnerBorderBottom from '../../../RunnerBorderBottom';

import { ReactComponent as Check } from '../../../../assets/svg/check.svg';

const SelectProgressBarAccordionItem: React.FC = () => {
  const { t } = useTranslation();
  const { typeOfProgressBar } = useAppSelector((store) => store.uiProgressBar);
  const appDispatch = useAppDispatch();

  return (
    <Accordion.Item className="background-color-sidebar color-text border-0" eventKey="2">
      <Accordion.Header className="p-0 ms-3">
        {t('sidebarField.settingSection.progressBar.name')}
      </Accordion.Header>
      <Accordion.Body className="d-flex flex-column">
        <RunnerBorderBottom>
          <Button
            variant=""
            className="w-100"
            onClick={() => {
              appDispatch(
                actionsUiProgressBar.updateTypeOfProgressBar({ typeOfProgressBar: 'straight' })
              );
              appDispatch(actionsUiNotification.show({ message: 'changed', type: 'success' }));
            }}
          >
            <div className="d-flex justify-content-between">
              <span className="me-3">{t('sidebarField.settingSection.progressBar.straight')}</span>
              {typeOfProgressBar === 'straight' && <Check width="25" height="25" />}
            </div>
          </Button>
        </RunnerBorderBottom>

        <RunnerBorderBottom>
          <Button
            variant=""
            className="w-100"
            onClick={() => {
              appDispatch(
                actionsUiProgressBar.updateTypeOfProgressBar({ typeOfProgressBar: 'circle' })
              );
              appDispatch(actionsUiNotification.show({ message: 'changed', type: 'success' }));
            }}
          >
            <div className="d-flex justify-content-between">
              <span className="me-3">{t('sidebarField.settingSection.progressBar.circle')}</span>
              {typeOfProgressBar === 'circle' && <Check width="25" height="25" />}
            </div>
          </Button>
        </RunnerBorderBottom>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default SelectProgressBarAccordionItem;
