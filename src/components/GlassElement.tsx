import cn from 'classnames';
import { useEffect, useRef } from 'react';

interface IGlassElement {
    classesOfContainer?: string,
    classesOfFrontFace?: string,
    classesOfBackFace?: string,
    showState?: string,
    hovering?: boolean, 
    stylesOfContainer?: {
        [key: string]: string,
    },
    stylesOfFrontFace?: {
        [key: string]: string,
    },
    children?: React.ReactNode,
}

const GlassElement: React.FC<IGlassElement> = (props) => {
    const refGlassElement = useRef<HTMLDivElement>(null);

    const {
        classesOfContainer,
        classesOfFrontFace,
        classesOfBackFace,
        stylesOfContainer,
        stylesOfFrontFace,
        children,
        showState,
        hovering
    } = props;

    useEffect(() => {
        setTimeout(() => {
            if (showState === 'unvisible') refGlassElement.current!.style.visibility = 'hidden';
        }, 400);
        if (showState === 'visible') refGlassElement.current!.style.visibility = '';
    }, [showState])
    const overHandler = () => {
        if (hovering) {
            refGlassElement.current!.style.transform = 'scale(1.055)';
        }
    }
    const outHandler = () => {
        if (hovering) {
            refGlassElement.current!.style.transform = 'scale(1)';
        }
    }
    const classesOfContainerGlass = cn('container-glass',classesOfContainer)
    const classesOfFrontFaceGlass = cn('front-face-of-glass', classesOfFrontFace)
    const classesOfBackFaceGlass = cn('back-face-of-glass', classesOfBackFace)
    return (
        <div 
            className={classesOfContainerGlass}
            style={stylesOfContainer}
            ref={refGlassElement}
            // onMouseOver={overHandler}
            // onMouseOut={outHandler}
        >
            
            <div className={classesOfBackFaceGlass}></div>
            <div className={classesOfFrontFaceGlass} style={stylesOfFrontFace}>
                {children}
            </div>
        </div>

    )
};

export default GlassElement;