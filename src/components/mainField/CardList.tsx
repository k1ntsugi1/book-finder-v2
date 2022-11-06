import { useRef } from "react";

import CardOfItem from "./CardOfItem";
import EmptyResultOfSearching from './EmptyResultOfSearching'

import { useAppSelector } from "../../store/hooks";
import { selectorsResultOfSearching } from "../../store/slices/resultOfSearchingBySearchingOptionsSlice";

import ElementOfScrollIntoView from "../progressSection/ElementOfScrollIntoView";

import ProgressSection from "../progressSection/ProgressSection";

const CardList: React.FC<{ typeOfItems: string }> = (props) => {

    const { typeOfItems } = props;
    const upperBlockRef = useRef<HTMLDivElement>(null);

    const { percentOfFilling } = useAppSelector(store => store.uiProgressBar)
    const defaultItems = useAppSelector(selectorsResultOfSearching.selectEntities);
    const starredItems = useAppSelector(store => store.dataOfStarredItems.entities);

    const showingItems = typeOfItems === 'default' ? defaultItems : starredItems;
    const isNotEmpty = showingItems && Object.values(showingItems).length ? true : false;

    return (
        <>
            {
                percentOfFilling > 40 &&
                <div className="w-100" style={{ 'height': '1px' }} ref={upperBlockRef}></div>
            }

            {
                isNotEmpty &&
                Object.values(showingItems).map(item => {
                    if (!item) return item;
                    return <CardOfItem key={item.id} item={item} />
                })
            }
            {
                !isNotEmpty &&
                <EmptyResultOfSearching />
            }

            <ProgressSection upperBlockRef={upperBlockRef}/>
        </>
    )
};

export default CardList;
