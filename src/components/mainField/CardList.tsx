import { useAppSelector } from "../../store/hooks";
import CardOfItem from "./CardOfItem";
import { selectorsResultOfSearching } from "../../store/resultOfSearchingSlice";

const CardList: React.FC = () => {
    const items = useAppSelector(selectorsResultOfSearching.selectEntities)
    return (
        <>
            {Object.values(items).map(item => <CardOfItem item={item!}/>)}
        </>
    )
};

export default CardList;
