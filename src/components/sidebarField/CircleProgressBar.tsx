import { useAppSelector } from "../../store/hooks";

const CircleProgressBar: React.FC = () => {
    const { heightOfColumn } = useAppSelector(store => store.uiValueOfScroll)
    const style = { 'background':`conic-gradient(#5769e9 ${(heightOfColumn/100) * 360}deg, white 0deg)` } as React.CSSProperties
    return (
        <div className="wrapper-circle-progress-bar" style={style}>
            <div className="face">{heightOfColumn.toFixed(0) + '%'}</div>
        </div>
    )
};

export default CircleProgressBar;