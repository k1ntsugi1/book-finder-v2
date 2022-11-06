import { useAppSelector } from "../../../store/hooks";

const StraightProgressBar: React.FC = () => {
    const { percentOfFilling } = useAppSelector(store => store.uiProgressBar)
    const style = { height: percentOfFilling + '%'} as React.CSSProperties
    return (
        <div className="wrapper-straight-progress-bar">
            <div className="progress-container">
                <div className="progress background-color-progressBar" style={style}></div>
            </div>
            <div 
                className="progress-text"
                style={{'background': 'var(--color-sidebar)'}}
            >{percentOfFilling.toFixed(0) + '%'}</div>
        </div>
    )
}

export default StraightProgressBar;