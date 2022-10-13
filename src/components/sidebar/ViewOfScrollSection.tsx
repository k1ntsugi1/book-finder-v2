import { useAppSelector } from "../../store/hooks";

const ViewOfScrollSection: React.FC = () => {
    const { heightOfColumn } = useAppSelector(store => store.uiValueOfScroll)
    const style = { height: heightOfColumn + '%' } as React.CSSProperties
    return (
        <div className="mx-auto w-25 h-25 bg-light">
            <div className="ScrollStatus bg-primary" style={style}></div>
        </div>
    )
}

export default ViewOfScrollSection;