import cn from 'classnames';
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useImmerReducer } from "use-immer";
import RotateCard from '../../RotateCard';

import GlassElement from '../../GlassElement';


interface BrushProps {
    showStateOfBrush: string,
};

interface InitialState {
    colors: {
        bodyColor: string,
        sideBarColor: string,
        textColor: string,
        scrollLoaderColor: string,
    },
    stateGlassEffect: boolean
};

interface ActionOfReducerImmer {
    type: string,
    value: string | boolean
};
const initialState: InitialState = {
    colors: {
        bodyColor: '#78a1a1',
        sideBarColor: '#C0C3E6',
        textColor: '#FAFFFF',
        scrollLoaderColor: '#78a1a1',
    },
    stateGlassEffect: true
}

function reducer(draft: InitialState, action: ActionOfReducerImmer) {
    switch (action.type) {
        case "reset":
            return void initialState;
        case "updateBodyColor":
            draft.colors.bodyColor = action.value as string;
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
        case "updateStateGlassEffect":
            draft.stateGlassEffect = action.value as boolean;
            return void draft;
    }
}


const BrushSection: React.FC<BrushProps> = (props) => {
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

    useEffect(() => {
        document.documentElement.style.setProperty('--color-body', state.colors.bodyColor)
        document.documentElement.style.setProperty('--color-sidebar', state.colors.sideBarColor)
        document.documentElement.style.setProperty('--color-text', state.colors.textColor)
        document.documentElement.style.setProperty('--color-scroll-loader', state.colors.scrollLoaderColor)

    })

    return (
        <GlassElement 
            classesOfContainer={classnamesOfBrushSection}
            stylesOfFrontFace={{ 
                'background': 'var(--color-sidebar)',
                'color': 'var(--color-text)'
            }}
        >
                <RotateCard
                    backFaceOfCard={
                        <Form.Check
                            type="checkbox"
                            name="withGlassEffect"
                            checked={state.stateGlassEffect}
                            onChange={() => dispatchImmer({ type: 'updateStateGlassEffect', value: !state.stateGlassEffect })}
                        />
                    }
                    frontFaceOfCard={
                        <Form.Label>With Glass-effect</Form.Label>
                    }
                />
                <RotateCard
                    backFaceOfCard={
                        <Form.Control
                            disabled={!state.stateGlassEffect}
                            type="file"
                            name="backgroundImage"
                            className="w-75"
                        />
                    }
                    frontFaceOfCard={
                        <Form.Label>Select-bakcground-image</Form.Label>
                    }
                />

                <RotateCard
                    backFaceOfCard={
                        <Form.Control
                            disabled={state.stateGlassEffect}
                            type="color"
                            name="color"
                            value={state.colors.bodyColor}
                            onChange={(event) => dispatchImmer({ type: 'updateBodyColor', value: event.target.value })}
                            aria-label="select-color"
                            className="w-75"
                        />
                    }
                    frontFaceOfCard={
                        <Form.Label>Select body color</Form.Label>
                    }
                />

                <RotateCard
                    backFaceOfCard={
                        <Form.Control
                            type="color"
                            name="sidebarColor"
                            value={state.colors.sideBarColor}
                            onChange={(event) => dispatchImmer({ type: 'updateSideBarColor', value: event.target.value })}
                            aria-label="select-color"
                            className="w-75"
                        />
                    }
                    frontFaceOfCard={
                        <Form.Label>Select sidebar color</Form.Label>
                    }
                />

                <RotateCard
                    backFaceOfCard={
                        <Form.Control
                            type="color"
                            name="textColor"
                            value={state.colors.textColor}
                            onChange={(event) => dispatchImmer({ type: 'updateTextColor', value: event.target.value })}
                            aria-label="select-color"
                            className="w-75"
                        />
                    }
                    frontFaceOfCard={
                        <Form.Label>Select text color</Form.Label>
                    }
                />

                <RotateCard
                    backFaceOfCard={
                        <Form.Control
                        type="color"
                        name="scrollLoaderColor"
                        value={state.colors.scrollLoaderColor}
                        onChange={(event) => dispatchImmer({ type: 'updateScrollLoaderColor', value: event.target.value })}
                        aria-label="select-color"
                        className="w-75"
                    />
                    }
                    frontFaceOfCard={
                        <Form.Label>Select ScrollLoader color</Form.Label>
                    }
                />

        </GlassElement>
        
    )
};

export default BrushSection;