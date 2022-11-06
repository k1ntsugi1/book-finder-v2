import { Accordion, Button } from "react-bootstrap"
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { actionsUiNotification } from "../../../../store/slices/uiNotificationSlice";

import RunnerBorderBottom from "../../../RunnerBorderBottom";

import { ReactComponent as  Check } from '../../../../assets/svg/check.svg';
import { useAppDispatch } from "../../../../store/hooks";

const SelectLangAccordionItem: React.FC = () => {

    const [langState, setNewLang] = useState<string>(localStorage.getItem('currentLang') ?? 'ru');
    const appDispatch = useAppDispatch();
    const { t, i18n } = useTranslation();

    return (
        <Accordion.Item
            className="background-color-sidebar color-text border-0"
            eventKey="1"
        >
            <Accordion.Header className="p-0 ms-3">{t("sidebarField.settingSection.language.name")}</Accordion.Header>
            <Accordion.Body className="d-flex flex-column">

                <RunnerBorderBottom>

                    <Button variant="" className="w-100" onClick={() => {
                        setNewLang('ru');
                        i18n.changeLanguage('ru');
                        appDispatch(actionsUiNotification.show({ message: 'changed', type: 'success' }));
                    }}>

                        <div className="d-flex justify-content-between">
                            <span>{t("sidebarField.settingSection.language.ru")}</span>
                            {langState === 'ru' && <Check width="25" height="25" />}
                        </div>

                    </Button>

                </RunnerBorderBottom>


                <RunnerBorderBottom>

                    <Button variant="" className="w-100" onClick={() => {
                        setNewLang('en');
                        i18n.changeLanguage('en');
                        appDispatch(actionsUiNotification.show({ message: 'changed', type: 'success' }))
                    }}>
                        <div className="d-flex justify-content-between">
                            <span>{t("sidebarField.settingSection.language.en")}</span>
                            {langState === 'en' && <Check width="25" height="25" />}
                        </div>

                    </Button>

                </RunnerBorderBottom>

            </Accordion.Body>
            
        </Accordion.Item>
    )
};

export default SelectLangAccordionItem;