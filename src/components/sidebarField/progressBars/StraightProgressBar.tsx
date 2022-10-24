import { useAppSelector } from "../../../store/hooks";

const StraightProgressBar: React.FC = () => {
    const { percentOfFilling } = useAppSelector(store => store.uiProgressBar)
    const style = { height: percentOfFilling + '%', background: 'var(--color-scroll-loader)' } as React.CSSProperties
    return (
        <div className="mx-auto w-25 h-25 bg-light border rounded">
            <div className="wrapper-straight-progress-bar">
                <div className="progress" style={style}></div>
            </div>
            <div className="mx-auto">{percentOfFilling.toFixed(0) + '%'}</div>
        </div>
    )
}

export default StraightProgressBar;