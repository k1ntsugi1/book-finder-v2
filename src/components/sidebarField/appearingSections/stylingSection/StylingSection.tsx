import { useEffect, useRef } from 'react';
import { useImmerReducer } from "use-immer";
import cn from 'classnames';
import { Button } from 'react-bootstrap';

import reducerImmer from './immer/reducerImmer';
import initialStateImmer from './immer/initialStateImmer';

import { useAppDispatch } from '../../../../store/hooks';
import { actionsUiNotification } from '../../../../store/slices/uiNotificationSlice';

import saveOptionsOfStyleHandler from '../../../../helpersFunc/saveOptionsOfStyleHandler'

import StylingBodyItem from './stylingItems/stylingBodyItem/StylingBodyItem';
import StylingSidebarItem from './stylingItems/StylingSidebarItem';
import StylingCardItem from './stylingItems/StylingCardItem';
import StylingTextItem from './stylingItems/StylingtextItem';
import StylingScrollLoaderItem from './stylingItems/StylingScrollLoaderItem';

import { IInitialStateImmer } from './interfaces';

const setVariousOfColorsHandler = (stateImmer: IInitialStateImmer) => {
    document.documentElement.style.setProperty('--color-body', stateImmer.colors.bodyColor);
    document.documentElement.style.setProperty('--color-card', stateImmer.colors.cardColor);
    document.documentElement.style.setProperty('--color-sidebar', stateImmer.colors.sideBarColor);
    document.documentElement.style.setProperty('--color-text', stateImmer.colors.textColor);
    document.documentElement.style.setProperty('--color-scroll-loader', stateImmer.colors.scrollLoaderColor);
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
    const colorWrapper= document.querySelector('[data-element="color-spinner"]') as HTMLDivElement;
    if (colorWrapper) colorWrapper.style.visibility = 'visible';
    document.body.style.setProperty('background', `${stateImmer.colors.bodyColor}`)
}


const StylingSection: React.FC<{ showStateOfBrush: string }> = (props) => {
    const { showStateOfBrush } = props;

    const appDispatch = useAppDispatch();
    const brushRef = useRef<HTMLDivElement>(null);
    const [stateImmer, dispatchImmer] = useImmerReducer(reducerImmer, initialStateImmer);

    const stylingItems = [
        StylingBodyItem,
        StylingSidebarItem,
        // StylingCardItem,
        StylingTextItem,
        StylingScrollLoaderItem
    ]

    const classnamesOfBrushSection = cn(
        'pt-3',
        'h-100',
        'w-200px',
        'd-flex',
        'flex-column',
        'gap-3',
        'transitionSidebar',
        'position-absolute',
        'start-100',
        'top-0',
        {
            'opacity-100 ': showStateOfBrush === 'visible' ? true : false,
            'opacity-0 ': showStateOfBrush === 'visible' ? false : true,
        });

    const classNamesOfRotatingCard = cn('border-bottom')

    useEffect(() => {
        setVariousOfColorsHandler(stateImmer)
    }, [stateImmer.colors.sideBarColor, stateImmer.colors.cardColor, stateImmer.colors.textColor, stateImmer.colors.scrollLoaderColor, stateImmer.colors.bodyColor])

    useEffect(() => {
        stateImmer.stateOfBodyBackground === 'color'
            ? setBackgroundBodyColorHandlet(stateImmer)
            : setBackgroundBodyImageHandler(stateImmer);

    }, [stateImmer.images.bodyImages, stateImmer.images.activeImage, stateImmer.colors.bodyColor, stateImmer.stateOfBodyBackground])

    useEffect(() => {
        setTimeout(() => {
            if (showStateOfBrush === 'unvisible') brushRef.current!.style.visibility = 'hidden';
        }, 400);
        if (showStateOfBrush === 'visible') brushRef.current!.style.visibility = '';
    }, [showStateOfBrush]);

    return (
        <div
            className={classnamesOfBrushSection}
            style={{
                'background': 'var(--color-sidebar)',
            }}
            ref={brushRef}
        >
            {stylingItems.map((StylingItem, index) => (
                <StylingItem
                    key={index}
                    stateImmer={stateImmer}
                    dispatchImmer={dispatchImmer}
                    classNamesOfRotatingCard={classNamesOfRotatingCard}
                />
            ))}
            <div className="d-flex flex-column align-items-center justify-content-center">
                <Button
                    className="w-75 bg-transparent border-0"
                    onClick={() => {
                        saveOptionsOfStyleHandler(stateImmer);
                        appDispatch(actionsUiNotification.show({ message: 'saved', type: 'success', statusOfVisibility: 'visible' }))
                    }}
                >
                    Save
                </Button>
                <Button
                    className="bg-transparent border-0"
                    onClick={() => {
                        dispatchImmer({ type: 'reset' });
                        appDispatch(actionsUiNotification.show({ message: 'reseted', type: 'success', statusOfVisibility: 'visible' }))
                    }}
                >
                    Reset all params
                </Button>
            </div>
        </div >

    )
};

export default StylingSection;