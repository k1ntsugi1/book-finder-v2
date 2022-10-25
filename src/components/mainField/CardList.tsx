import CardOfItem from "./CardOfItem";
import EmptyResultOfSearching from './EmptyResultOfSearching'

import { useAppSelector } from "../../store/hooks";
import { selectorsResultOfSearching } from "../../store/slices/resultOfSearchingBySearchingOptionsSlice";

const CardList: React.FC<{typeOfItems: string}> = (props) => {
    const { typeOfItems } = props;
    const defaultItems = useAppSelector(selectorsResultOfSearching.selectEntities);
    const staredItems = useAppSelector(store => store.dataOfStarredItems.entities);
    const showingItems = typeOfItems === 'default' ? defaultItems : staredItems;
    const isNotEmpty = showingItems && Object.values(showingItems).length ? true : false;
    
    return (
        <>
            {isNotEmpty && Object.values(showingItems).map(item => <CardOfItem item={item!}/>)}
            {!isNotEmpty && <EmptyResultOfSearching />}
        </>
    )
};

export default CardList;
