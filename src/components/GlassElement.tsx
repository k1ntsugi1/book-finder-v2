import cn from 'classnames';
import { useEffect, useRef } from 'react';

interface IGlassElement {
    className?: string,
    classesOfFrontFace?: string,
    classesOfBackFace?: string,
    showState?: string,
    hovering?: boolean,
    showingElement?: React.RefObject<HTMLDivElement>,
    style?: {
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
        className,
        classesOfFrontFace,
        classesOfBackFace,
        style,
        stylesOfFrontFace,
        children,
        showState,
        hovering,
        showingElement,
    } = props;

    useEffect(() => {
        setTimeout(() => {
            if (showState === 'unvisible') refGlassElement.current!.style.visibility = 'hidden';
        }, 400);
        if (showState === 'visible') refGlassElement.current!.style.visibility = '';
    }, [showState])

    const overHandler = () => {
        if (hovering && showingElement) {
            showingElement.current!.style.visibility = 'visible';
        }
    }
    const outHandler = () => {
        if (hovering && showingElement) {
            showingElement.current!.style.visibility = 'hidden';
        }
    }
    const classesOfContainerGlass = cn('container-glass',className)
    // const classesOfFrontFaceGlass = cn('front-face-of-glass', classesOfFrontFace)
    // const classesOfBackFaceGlass = cn('back-face-of-glass', classesOfBackFace)
    return (
        <div 
            className={classesOfContainerGlass}
            style={style}
            ref={refGlassElement}
            onMouseOver={overHandler}
            onMouseOut={outHandler}
        >
            
            {/* <div className={classesOfBackFaceGlass}></div>
            <div className={classesOfFrontFaceGlass} style={stylesOfFrontFace}> */}
                {children}
            {/* </div> */}
        </div>

    )
};

export default GlassElement;