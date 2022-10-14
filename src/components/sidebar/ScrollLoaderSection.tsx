import { useAppSelector } from "../../store/hooks";

const ScrollLoaderSection: React.FC = () => {
    const { heightOfColumn } = useAppSelector(store => store.uiValueOfScroll)
    const style = { height: heightOfColumn + '%', background: 'var(--color-scroll-loader)'} as React.CSSProperties
    return (
        <div className="mx-auto w-25 h-25 bg-light">
            <div className="ScrollStatus" style={style}></div>
        </div>
    )
}

export default ScrollLoaderSection;