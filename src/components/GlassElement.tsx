import cn from 'classnames';
import { useEffect, useRef } from 'react';

interface IGlassElement {
    className?: string,
    showState?: string,
    hovering?: boolean,
    showingElement?: React.RefObject<HTMLDivElement>,
    style?: {
        [key: string]: string,
    },
    children?: React.ReactNode,
}

const GlassElement: React.FC<IGlassElement> = (props) => {

    const refGlassElement = useRef<HTMLDivElement>(null);

    const {
        className,
        style,
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
    }, [showState]);

    const mouseOverHandler = () => {
        if (hovering && showingElement) {
            showingElement.current!.style.visibility = 'visible';
        }
    };

    const mouseOutHandler = () => {
        if (hovering && showingElement) {
            showingElement.current!.style.visibility = 'hidden';
        }
    };

    const classesOfContainerGlass = cn('container-glass', className);
    
    return (
        <div
            className={classesOfContainerGlass}
            style={style}
            ref={refGlassElement}
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
        >
            {children}
        </div>

    )
};

export default GlassElement;