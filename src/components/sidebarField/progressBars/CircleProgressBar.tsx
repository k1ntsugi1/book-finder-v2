import { useAppSelector } from "../../../store/hooks";

const CircleProgressBar: React.FC = () => {
    const { percentOfFilling } = useAppSelector(store => store.uiProgressBar)
    const style = { 'background': `conic-gradient(var(--color-scroll-loader) ${(percentOfFilling / 100) * 360}deg, white 0deg)` } as React.CSSProperties
    return (
        <div className="wrapper-circle-progress-bar border rounded-circle" style={{ 'background': 'var(--color-sidebar)', 'color': 'var(--color-text)'}}>
            <div className="progress" style={style}>
                <div className="face border rounded-circle" style={{ 'background': 'var(--color-sidebar)'}}>{percentOfFilling.toFixed(0) + '%'}</div>
            </div>
        </div>
    )
};

export default CircleProgressBar;