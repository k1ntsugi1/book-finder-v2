import { useAppSelector } from "../../store/hooks";
import CardOfItem from "./CardOfItem";

const CardList: React.FC = () => {
    const { items } = useAppSelector(store => store.resultOfSearching)
    return (
        <>
            {items.map(item => <CardOfItem item={item}/>)}
        </>
    )
};

export default CardList;
