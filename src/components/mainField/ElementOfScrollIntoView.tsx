import { RefObject } from "react"

import cn from 'classnames';

import { ReactComponent as CaretUp } from '../../assets/svg/caret-up-fill.svg'

interface IProps {
    elementOfBreakPoint: RefObject<HTMLElement>,
    style?: React.CSSProperties,
    className?: string,
};

const ElementOfScrollIntoView: React.FC<IProps> = (props) => {

    const { elementOfBreakPoint, style, className } = props;

    const classnames = cn(className)

    return (
        <div 
            className={classnames}
            style={style}
            onClick={() => {
                elementOfBreakPoint.current!.scrollIntoView( {block: 'center', behavior: 'smooth' })
            }}
        >
            <CaretUp width="25" height="25" />
        </div>
    )
};

export default ElementOfScrollIntoView;