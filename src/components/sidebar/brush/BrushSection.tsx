//типизация event!!!!!!!!!!!!!
import axios from 'axios';
import cn from 'classnames';
import { useEffect, useRef } from 'react';
import { Form, Button, Accordion } from 'react-bootstrap';
import { useImmerReducer } from "use-immer";
import RotateCard from '../../RotateCard';

import { actionsUiNotification } from '../../../store/uiNotificationSlice';

import DefaultImageBackground from '../../../assets/images/back2.jpg'

import GlassElement from '../../GlassElement';

import saveOptionsOfStyleHandler from '../../../helpersFunc/saveOptionsOfStyleHandler'
import { useAppDispatch } from '../../../store/hooks';

interface IResponseData {
    data: {
        url: string,
    }
}

interface BrushProps {
    showStateOfBrush: string,
};

export interface IInitialStateImmer {
    stateOfBackground: string,
    images: {
        activeImage: string,
        bodyImages: string[]
    }
    colors: {
        bodyColor: string,
        cardColor: string,
        sideBarColor: string,
        textColor: string,
        scrollLoaderColor: string,
    },
};

interface ActionOfReducerImmer {
    type: string,
    value?: string | boolean
};
const initialState: IInitialStateImmer = {
    stateOfBackground: localStorage.getItem('stateOfBackground') ?? 'image',
    images: {
        activeImage: localStorage.getItem('activeImage') ?? DefaultImageBackground,
        bodyImages: JSON.parse(localStorage.getItem('backgroundImages') ?? JSON.stringify({ active: 0, images: [DefaultImageBackground] }))
    },
    colors: {
        bodyColor: localStorage.getItem('bodyColor') ?? '#78a1a1',
        cardColor: localStorage.getItem('cardColor') ?? '#C0C3E6',
        sideBarColor: localStorage.getItem('sideBarColor') ?? '#C0C3E6',
        textColor: localStorage.getItem('textColor') ?? '#FAFFFF',
        scrollLoaderColor: localStorage.getItem('scrollLoaderColor') ?? '#78a1a1',
    },
}

// что-то много as string подумай как исправить

function reducer(draft: IInitialStateImmer, action: ActionOfReducerImmer) {
    switch (action.type) {
        case "reset":
            return initialState;
        case "updateBodyColor":
            draft.colors.bodyColor = action.value as string;
            return void draft;
        case "updateCardColor":
            draft.colors.cardColor = action.value as string;
            return void draft;
        case "updateSideBarColor":
            draft.colors.sideBarColor = action.value as string;
            return void draft;
        case "updateTextColor":
            draft.colors.textColor = action.value as string;
            return void draft;
        case "updateScrollLoaderColor":
            draft.colors.scrollLoaderColor = action.value as string;
            return void draft;
        case "updateStateOfBackground":
            draft.stateOfBackground = action.value as string;
            return void draft;
        case "updateActiveImage":
            draft.images.activeImage = action.value as string;
            return void draft;
        case "updateBodyImages":
            draft.images.bodyImages.push(action.value as string);
            draft.images.activeImage = action.value as string;
            return void draft;
    }
}


const BrushSection: React.FC<BrushProps> = (props) => {
    const uploadFileRef = useRef<HTMLInputElement>(null)
    const { showStateOfBrush } = props;
    const [state, dispatchImmer] = useImmerReducer(reducer, initialState);
    const appDispatch = useAppDispatch();
    const classnamesOfBrushSection = cn(
        'bg-transparent',
        'vw-20',
        'transitionSidebar',
        'position-absolute',
        'start-100',
        'top-0',
        {
            'opacity-100 ': showStateOfBrush === 'visible' ? true : false,
            'opacity-0 ': showStateOfBrush === 'visible' ? false : true,
        });

    const classnamesOfRotateCard = cn('border-bottom')

    useEffect(() => {
        document.documentElement.style.setProperty('--color-body', state.colors.bodyColor);
        document.documentElement.style.setProperty('--color-card', state.colors.cardColor);
        document.documentElement.style.setProperty('--color-sidebar', state.colors.sideBarColor);
        document.documentElement.style.setProperty('--color-text', state.colors.textColor);
        document.documentElement.style.setProperty('--color-scroll-loader', state.colors.scrollLoaderColor);

    }, [state.colors.sideBarColor, state.colors.cardColor, state.colors.textColor, state.colors.scrollLoaderColor, state.colors.bodyColor])

    useEffect(() => {
        if (state.stateOfBackground === 'color') {
            //document.documentElement.style.setProperty('--color-body', state.colors.bodyColor);
            document.body.style.setProperty('background', `${state.colors.bodyColor}`)
        } else {
            const imageLink = state.images.activeImage;
            document.body.style.setProperty('background-image', `url(${imageLink})`);
            document.body.style.setProperty('background-position', 'center');
            document.body.style.setProperty('background-repeat', 'repeat');
            document.body.style.setProperty('background-size', 'cover');
        }

    }, [state.images.bodyImages, state.images.activeImage, state.colors.bodyColor, state.stateOfBackground])

    return (
        <GlassElement
            showState={showStateOfBrush}
            classesOfContainer={classnamesOfBrushSection}
            classesOfFrontFace="pt-4 border-right d-flex flex-column justify-content-start align-items-center gap-3"
            stylesOfFrontFace={{
                'background': 'var(--color-sidebar)',
                'color': 'var(--color-text)'
            }}
        >

            <Accordion>
                <Accordion.Item className="border-0" eventKey="0" style={{ 'background': 'var(--color-sidebar)' }}>
                    <Accordion.Header style={{ 'background': 'var(--color-sidebar)' }}>Select background</Accordion.Header>
                    <Accordion.Body className='d-flex flex-wrap gap-1'>
                        {state.images.bodyImages.map(imageURL => {
                            return (
                                <img
                                    src={imageURL}
                                    alt="imgItem"
                                    className="p-1 w-25 h-25 cursor-pointer border"
                                    key={imageURL}
                                    id={imageURL}
                                    onClick={() => {
                                        dispatchImmer({ type: 'updateStateOfBackground', value: 'image' });
                                        dispatchImmer({ type: 'updateActiveImage', value: imageURL })
                                    }} />
                            )
                        })}
                        <div
                            className="w-25 p-1 border centered-content border cursor-pointer"
                            onClick={() => dispatchImmer({ type: 'updateStateOfBackground', value: 'color' })}
                        >
                            <div className="w-100 h-100" style={{ 'background': 'var(--color-body)' }}></div>
                        </div>
                        <RotateCard
                            classnames={classnamesOfRotateCard}
                            backFaceOfCard={
                                <Form.Control
                                    className="w-75"
                                    type="file"
                                    name="image"
                                    accept="image/png, image/jpeg, image/jpg"
                                    ref={uploadFileRef}
                                    onChange={async () => {
                                        if (!uploadFileRef.current?.files) { return; }
                                        const file = uploadFileRef.current.files[0];

                                        const formData = new FormData();
                                        formData.append('image', file)

                                        const url = new URL('/1/upload', 'https://api.imgbb.com');
                                        url.searchParams.set('key', '55613fc8c4bcab8867f472a0998328e1');
                                        const { data: response } = await axios<IResponseData>({
                                            method: 'post',
                                            url: url.toString(),
                                            data: formData,
                                        });


                                        dispatchImmer({ type: 'updateBodyImages', value: response.data.url })
                                    }}
                                />
                            }
                            frontFaceOfCard={
                                <Form.Label>Add-background-image</Form.Label>
                            }
                        />
                        <RotateCard
                            classnames={classnamesOfRotateCard}
                            backFaceOfCard={
                                <Form.Control
                                    className="w-75"
                                    type="color"
                                    name="bodyColor"
                                    value={state.colors.bodyColor}
                                    onChange={(event) => dispatchImmer({ type: 'updateBodyColor', value: event.target.value })}
                                    aria-label="select-color"
                                />
                            }
                            frontFaceOfCard={
                                <Form.Label>Select body color</Form.Label>
                            }
                        />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <RotateCard
                classnames={classnamesOfRotateCard}
                backFaceOfCard={
                    <Form.Control
                        className="w-75"
                        type="color"
                        name="sidebarColor"
                        value={state.colors.sideBarColor}
                        onChange={(event) => dispatchImmer({ type: 'updateSideBarColor', value: event.target.value })}
                        aria-label="select-color"
                    />
                }
                frontFaceOfCard={
                    <Form.Label>Select sidebar color</Form.Label>
                }
            />

            <RotateCard
                classnames={classnamesOfRotateCard}
                backFaceOfCard={
                    <Form.Control
                        className="w-75"
                        type="color"
                        name="cardColor"
                        value={state.colors.cardColor}
                        onChange={(event) => dispatchImmer({ type: 'updateCardColor', value: event.target.value })}
                        aria-label="select-color"
                    />
                }
                frontFaceOfCard={
                    <Form.Label>Select card color</Form.Label>
                }
            />

            <RotateCard
                classnames={classnamesOfRotateCard}
                backFaceOfCard={
                    <>
                        <Form.Control
                            className="w-75"
                            type="color"
                            name="textColor"
                            value={state.colors.textColor}
                            onChange={(event) => dispatchImmer({ type: 'updateTextColor', value: event.target.value })}
                            aria-label="select-color"
                        />
                    </>
                }
                frontFaceOfCard={
                    <Form.Label>Select text color</Form.Label>
                }
            />

            <RotateCard
                classnames={classnamesOfRotateCard}
                backFaceOfCard={
                    <Form.Control
                        className="w-75"
                        type="color"
                        name="scrollLoaderColor"
                        value={state.colors.scrollLoaderColor}
                        onChange={(event) => dispatchImmer({ type: 'updateScrollLoaderColor', value: event.target.value })}
                        aria-label="select-color"
                    />
                }
                frontFaceOfCard={
                    <Form.Label>Select ScrollLoader color</Form.Label>
                }
            />
            <Button
                className="w-75 bg-transparent border-0"
                onClick={() => {
                    saveOptionsOfStyleHandler(state);
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
        </GlassElement>

    )
};

export default BrushSection;