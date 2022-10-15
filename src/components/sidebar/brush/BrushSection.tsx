//типизация event!!!!!!!!!!!!!
import axios from 'axios';
import cn from 'classnames';
import { useEffect, useRef } from 'react';
import { Form, Button, Accordion } from 'react-bootstrap';
import { useImmerReducer } from "use-immer";
import RotateCard from '../../RotateCard';

import DefaultImageBackground from '../../../assets/images/back2.jpg'

import GlassElement from '../../GlassElement';

import saveOptionsOfStyleHandler from '../../../helpersFunc/saveOptionsOfStyleHandler'

interface BrushProps {
    showStateOfBrush: string,
};

export interface IInitialStateImmer {
    colors: {
        bodyColor: string,
        cardColor: string,
        sideBarColor: string,
        textColor: string,
        scrollLoaderColor: string,
    },
    stateOfBackground: string,
    backgroundImages: string[],
};

interface ActionOfReducerImmer {
    type: string,
    value?: string | boolean
};
const initialState: IInitialStateImmer = {
    colors: {
        bodyColor: localStorage.getItem('bodyColor') ?? '#78a1a1',
        cardColor: localStorage.getItem('cardColor') ?? '#C0C3E6',
        sideBarColor: localStorage.getItem('sideBarColor') ?? '#C0C3E6',
        textColor: localStorage.getItem('textColor') ?? '#FAFFFF',
        scrollLoaderColor: localStorage.getItem('scrollLoaderColor') ?? '#78a1a1',
    },
    stateOfBackground: 'image',
    backgroundImages: JSON.parse(localStorage.getItem('backgroundImages') ?? JSON.stringify([DefaultImageBackground])),
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
        case "updateStatebackgroundOfBody":
            return void draft.backgroundImages.push(action.value as string);
    }
}


const BrushSection: React.FC<BrushProps> = (props) => {
    const ref = useRef(null)
    const { showStateOfBrush } = props;
    const [state, dispatchImmer] = useImmerReducer(reducer, initialState);

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
        document.documentElement.style.setProperty('--color-card', state.colors.cardColor);
        document.documentElement.style.setProperty('--color-sidebar', state.colors.sideBarColor);
        document.documentElement.style.setProperty('--color-text', state.colors.textColor);
        document.documentElement.style.setProperty('--color-scroll-loader', state.colors.scrollLoaderColor);

    }, [state.colors.sideBarColor, state.colors.cardColor, state.colors.textColor, state.colors.scrollLoaderColor])

    useEffect(() => {
        //document.body.style.background = state.colors.bodyColor;
    }, [state.colors.bodyColor])

    return (
        <GlassElement
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
                    <Accordion.Body>
                        {state.backgroundImages.map(imageURL => <img src={imageURL} alt="imgItem" className="w-25 h-25" />)}
                        <div className="w-25 h-25" onClick={() => dispatchImmer({ type: 'updateStateOfBackground', value: 'color' })}></div>
                        <RotateCard
                            classnames={classnamesOfRotateCard}
                            backFaceOfCard={
                                <Form.Control
                                    className="w-75"
                                    disabled={state.stateOfBackground === 'color'}
                                    type="file"
                                    name="image"
                                    accept="image/png, image/jpeg"
                                    // ref={ref}
                                    // onChange={async () => {
                                    //     const formData = new FormData();
                                    //     const file = ref.current!.files[0];
                                    //     formData.append(file.name, file)
                                    //     const url = new URL('3/image', 'https://api.imgur.com/');
                                    //     //url.searchParams.set('key', '55613fc8c4bcab8867f472a0998328e1')
                                    //     const link = await axios(url.toString(), {
 
                                    //     });
                                    //     console.log(link);
                                    //     dispatchImmer({ type: 'updateStatebackgroundOfBody', value: link })
                                    // }}
                                />
                            }
                            frontFaceOfCard={
                                <Form.Label>Select-bakcground-image</Form.Label>
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
                        disabled={state.stateOfBackground !== 'color'}
                        type="color"
                        name="color"
                        value={state.colors.bodyColor}
                        onChange={(event) => dispatchImmer({ type: 'updateBodyColor', value: event.target.value })}
                        aria-label="select-color"
                    />
                }
                frontFaceOfCard={
                    <Form.Label>Select body color</Form.Label>
                }
            />

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
                    <Form.Control
                        className="w-75"
                        type="color"
                        name="textColor"
                        value={state.colors.textColor}
                        onChange={(event) => dispatchImmer({ type: 'updateTextColor', value: event.target.value })}
                        aria-label="select-color"
                    />
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
                onClick={() => saveOptionsOfStyleHandler(state)}
            >
                Save
            </Button>
            <Button
                className="bg-transparent border-0"
                onClick={() => { dispatchImmer({ type: 'reset' }) }}
            >
                Reset all params
            </Button>
        </GlassElement>

    )
};

export default BrushSection;