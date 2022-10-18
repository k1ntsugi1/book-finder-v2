import { useAppSelector } from "../../store/hooks";
import CardOfItem from "./CardOfItem";
import { selectorsResultOfSearching } from "../../store/resultOfSearchingSlice";

const CardList: React.FC<{typeOfItems: string}> = (props) => {
    const { typeOfItems } = props;
    const deafaultItems = useAppSelector(selectorsResultOfSearching.selectEntities);
    const staredItems = useAppSelector(store => store.dataOfStaredItems.entities);
    const showingItems = typeOfItems === 'default' ? deafaultItems : staredItems;
    // store => {
    //     const selectedItems = typeOfItems === 'default' 
    //         ? selectorsResultOfSearching.selectEntities(store)
    //         : store.dataOfStaredItems.entities;
    //     console.log(selectedItems)
    //     return selectedItems;
    // })
   
    return (
        <>
            {Object.values(showingItems).map(item => <CardOfItem item={item!}/>)}
        </>
    )
};

export default CardList;
