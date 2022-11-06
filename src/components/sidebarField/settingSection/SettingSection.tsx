import { useEffect, useRef } from 'react';
import { useImmerReducer } from "use-immer";
import cn from 'classnames';
import { Button, Accordion } from 'react-bootstrap';

import reducerImmer from './immer/reducerImmer';
import initialStateImmer from './immer/initialStateImmer';

import { useAppDispatch } from '../../../store/hooks';
import { actionsUiNotification } from '../../../store/slices/uiNotificationSlice';

import RunnerBorderBottom from '../../RunnerBorderBottom';

import saveOptionsOfStyleHandler from '../../../utils/saveOptionsOfSettingSection'

import SelectLangAccordionItem from './accordionItems/SelectLangAccordionItem';
import SelectParamsOfStylingAccordionItem from './accordionItems/SelectParamsOfStylingAccordionItem';
import SelectProgressBarAccordionItem from './accordionItems/SelectProgressBarAccordionItem';

import { IInitialStateImmer } from './interfaces';

const setVariousOfColorsHandler = (stateImmer: IInitialStateImmer) => {
    document.documentElement.style.setProperty('--color-body', stateImmer.colors.bodyColor);
    document.documentElement.style.setProperty('--color-sidebar', stateImmer.colors.sideBarColor);
    document.documentElement.style.setProperty('--color-text', stateImmer.colors.textColor);
    document.documentElement.style.setProperty('--color-progressBar', stateImmer.colors.progressBarColor);
}

const setBackgroundBodyImageHandler = (stateImmer: IInitialStateImmer) => {
    const imageLink = stateImmer.images.activeImage;
    const colorWrapper = document.querySelector('[data-element="color-spinner"]') as HTMLDivElement;
    if (colorWrapper) colorWrapper.style.visibility = 'hidden';
    document.body.style.setProperty('background-image', `url(${imageLink})`);
    document.body.style.setProperty('background-position', 'center');
    document.body.style.setProperty('background-repeat', 'repeat');
    document.body.style.setProperty('background-size', 'cover');
}

const setBackgroundBodyColorHandlet = (stateImmer: IInitialStateImmer) => {
    const colorWrapper = document.querySelector('[data-element="color-spinner"]') as HTMLDivElement;
    if (colorWrapper) colorWrapper.style.visibility = 'visible';
    document.body.style.setProperty('background', `${stateImmer.colors.bodyColor}`)
}


const StylingSection: React.FC<{ showStateOfBrush: string }> = (props) => {
    
    const { showStateOfBrush } = props;

    const appDispatch = useAppDispatch();
    const settingSectionRef = useRef<HTMLDivElement>(null);
    const [stateImmer, dispatchImmer] = useImmerReducer(reducerImmer, initialStateImmer);

    const classnamesOfBrushSection = cn(
        'background-color-sidebar',
        'pt-3',
        'h-100',
        'w-appeating-section',
        'd-flex',
        'flex-column',
        'gap-3',
        'transitionSidebar',
        'position-absolute',
        'start-100',
        'top-0',
        'overflow-auto',
        'scrollbar',
        {
            'opacity-100 ': showStateOfBrush === 'visible' ? true : false,
            'opacity-0 ': showStateOfBrush === 'visible' ? false : true,
        });

    useEffect(() => {
        setVariousOfColorsHandler(stateImmer)
    }, [stateImmer.colors.sideBarColor, stateImmer.colors.textColor, stateImmer.colors.progressBarColor, stateImmer.colors.bodyColor])

    useEffect(() => {
        stateImmer.stateOfBodyBackground === 'color'
            ? setBackgroundBodyColorHandlet(stateImmer)
            : setBackgroundBodyImageHandler(stateImmer);

    }, [stateImmer.images.bodyImages, stateImmer.images.activeImage, stateImmer.colors.bodyColor, stateImmer.stateOfBodyBackground])

    useEffect(() => {
        setTimeout(() => {
            if (showStateOfBrush === 'unvisible') settingSectionRef.current!.style.visibility = 'hidden';
        }, 400);
        if (showStateOfBrush === 'visible') settingSectionRef.current!.style.visibility = '';
    }, [showStateOfBrush]);

    return (
        <section
            className={classnamesOfBrushSection}
            ref={settingSectionRef}
        >
            <Accordion>
                <SelectParamsOfStylingAccordionItem stateImmer={stateImmer} dispatchImmer={dispatchImmer} />
                <SelectLangAccordionItem />
                <SelectProgressBarAccordionItem />
            </Accordion>

            <div className="d-flex flex-column align-items-center justify-content-center">

                <RunnerBorderBottom>
                    <Button
                        variant=""
                        onClick={() => {
                            saveOptionsOfStyleHandler(stateImmer);
                            appDispatch(actionsUiNotification.show({ message: 'saved', type: 'success', statusOfVisibility: 'visible' }))
                        }}
                    >
                        <span>Save</span>
                    </Button>
                </RunnerBorderBottom>

                <RunnerBorderBottom>
                    <Button
                        variant=""
                        onClick={() => {
                            dispatchImmer({ type: 'reset' });
                            appDispatch(actionsUiNotification.show({ message: 'reseted', type: 'success', statusOfVisibility: 'visible' }))
                        }}
                    >
                        <span>Reset all params</span>
                    </Button>
                </RunnerBorderBottom>


            </div>
        </section >

    )
};

export default StylingSection;