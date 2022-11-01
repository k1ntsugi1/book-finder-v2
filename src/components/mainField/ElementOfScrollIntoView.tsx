import { RefObject } from "react"

import cn from 'classnames';

interface IProps {
    elementOfBreakPoint: RefObject<HTMLElement>,
    children?: React.ReactNode,
    style?: React.CSSProperties,
    className?: string,
};

const ElementOfScrollIntoView: React.FC<IProps> = (props) => {

    const { elementOfBreakPoint, children, style, className } = props;

    const classnames = cn('scroll-into-view-container', className)

    return (
        <div 
            className={classnames}
            style={style}
            onClick={() => {
                elementOfBreakPoint.current!.scrollIntoView( {block: 'center', behavior: 'smooth' })
            }}
        >
            {children}
        </div>
    )
};

export default ElementOfScrollIntoView;