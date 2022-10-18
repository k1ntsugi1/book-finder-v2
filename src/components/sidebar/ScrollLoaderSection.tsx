import { useAppSelector } from "../../store/hooks";



const ScrollLoaderSection: React.FC = () => {
    const { heightOfColumn } = useAppSelector(store => store.uiValueOfScroll)
    const style = { height: heightOfColumn + '%', background: 'var(--color-scroll-loader)' } as React.CSSProperties
    return (
        <div className="mx-auto w-25 h-25 border rounded">
            <div className="w-100 h-100  bg-light rounded">
                <div className="ScrollStatus rounded" style={style}></div>
            </div>
            <div>{heightOfColumn.toFixed(0) + '%'}</div>
        </div>
    )
}

export default ScrollLoaderSection;