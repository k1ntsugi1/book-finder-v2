import { useRef } from "react";

import CardOfItem from "./CardOfItem";
import EmptyResultOfSearching from './EmptyResultOfSearching'

import { useAppSelector } from "../../store/hooks";
import { selectorsResultOfSearching } from "../../store/slices/resultOfSearchingBySearchingOptionsSlice";

import CaretUpFillSVGElement from "../SVGElements/CaretUpFillSVGElement";

import ElementOfScrollIntoView from "./ElementOfScrollIntoView";

const CardList: React.FC<{ typeOfItems: string }> = (props) => {

    const { typeOfItems } = props;
    const upperBlockRef = useRef<HTMLDivElement>(null);

    const { percentOfFilling } = useAppSelector(store => store.uiProgressBar)
    const defaultItems = useAppSelector(selectorsResultOfSearching.selectEntities);
    const staredItems = useAppSelector(store => store.dataOfStarredItems.entities);

    const showingItems = typeOfItems === 'default' ? defaultItems : staredItems;
    const isNotEmpty = showingItems && Object.values(showingItems).length ? true : false;

    return (
        <>
            <div className="w-100" style={{ 'height': '1px' }} ref={upperBlockRef}></div>

            {isNotEmpty && Object.values(showingItems).map(item => <CardOfItem item={item!} />)}
            {!isNotEmpty && <EmptyResultOfSearching />}

            {
                percentOfFilling > 40 &&
                <ElementOfScrollIntoView
                    elementOfBreakPoint={upperBlockRef}
                    style={{ 'color': 'var(--color-scroll-loader)', 'background': 'var(--color-sidebar)' }}>
                    <CaretUpFillSVGElement width="25" height="25" />
                </ElementOfScrollIntoView>
            }


        </>
    )
};

export default CardList;
