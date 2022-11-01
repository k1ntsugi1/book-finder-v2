import { Accordion, Button } from "react-bootstrap"
import { useState } from "react";
import { useTranslation } from "react-i18next";

import RunnerBorderBottom from "../../../RunnerBorderBottom";

import CheckSVGElement from "../../../SVGElements/CheckSVGElement";


const SelectLangAccordionItem: React.FC = () => {

    const [langState, setNewLang] = useState<string>(localStorage.getItem('currentLang') ?? 'ru');
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
                        i18n.changeLanguage('ru')
                    }}>

                        <div className="d-flex justify-content-between">
                            <span>{t("sidebarField.settingSection.language.ru")}</span>
                            {langState === 'ru' && <CheckSVGElement width="25" height="25" />}
                        </div>

                    </Button>

                </RunnerBorderBottom>


                <RunnerBorderBottom>

                    <Button variant="" className="w-100" onClick={() => {
                        setNewLang('en');
                        i18n.changeLanguage('en')
                    }}>
                        <div className="d-flex justify-content-between">
                            <span>{t("sidebarField.settingSection.language.en")}</span>
                            {langState === 'en' && <CheckSVGElement width="25" height="25" />}
                        </div>

                    </Button>

                </RunnerBorderBottom>

            </Accordion.Body>
            
        </Accordion.Item>
    )
};

export default SelectLangAccordionItem;