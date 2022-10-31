import cn from 'classnames'
import { Button, Pagination } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import fetchGetDataBySearchingOptions from '../../store/asyncThunks/fetchGetDataBySearchingOptions';

import { actionsDataOfSearchingOptions } from "../../store/slices/dataOfSearchingOptionsSlice";
import { actionsResultOfSearching } from "../../store/slices/resultOfSearchingBySearchingOptionsSlice";


const Loader: React.FC = () => {
    const appDispatch = useAppDispatch();
    const { searchParams, range: { startIndex, maxResults } } = useAppSelector(store => store.dataOfSearchingOptions);
    const { totalItems } = useAppSelector(store => store.resultOfSearchingBySearchingOptions);
    const pagesCount = Math.floor(totalItems / maxResults);
    const currentActivePaginationItem = startIndex / maxResults;
    const classnamesOfButton = cn('border');

    const stylesOfBtn = {
        'border': '1px solid var(--color-text)',
        'border-radius': '0'
    };

    const loadItems = () => {
        appDispatch(fetchGetDataBySearchingOptions(searchParams))
    }

    const loadNextItems = () => {
        appDispatch(actionsResultOfSearching.removeItems())
        loadItems();
    };

    const loadPreviousItems = () => {
        appDispatch(actionsResultOfSearching.removeItems());
        appDispatch(actionsDataOfSearchingOptions.decreaseStartIndex());
        loadItems();
    };

    const loadItemsByPaginationNumber =  (e: React.MouseEvent<HTMLUListElement>) => {
        if (!(e.target instanceof HTMLElement)) return;
        const num = Number(e.target.textContent) - 1;
        appDispatch(actionsResultOfSearching.removeItems());
        appDispatch(actionsDataOfSearchingOptions.updateStartIndex({num}));
        loadItems();
    }



    return (
        <div className="color-text d-flex justify-content-between position-relative w-100 mx-5">

            <Pagination onClick={loadItemsByPaginationNumber}>

                {currentActivePaginationItem > 3 && <Pagination.Item >{1}</Pagination.Item>}

                {currentActivePaginationItem >= 5 && <Pagination.Ellipsis disabled />}

                {
                    currentActivePaginationItem > 2 &&
                    <Pagination.Item>
                        {currentActivePaginationItem - 2}
                    </Pagination.Item>
                }

                {
                    currentActivePaginationItem > 1 &&
                    <Pagination.Item>
                        {currentActivePaginationItem - 1}
                    </Pagination.Item>
                }


                {
                    <Pagination.Item active>
                        {currentActivePaginationItem}
                    </Pagination.Item>
                }

                {
                    currentActivePaginationItem <= (pagesCount - 1) &&
                    <Pagination.Item >
                        {currentActivePaginationItem + 1}
                    </Pagination.Item>
                }

                {
                    currentActivePaginationItem <= (pagesCount - 2) &&
                    <Pagination.Item >
                        {currentActivePaginationItem + 2}
                    </Pagination.Item>
                }


                {currentActivePaginationItem <= (pagesCount - 4) && <Pagination.Ellipsis disabled />}

                {currentActivePaginationItem <= (pagesCount - 3) && <Pagination.Item>{pagesCount}</Pagination.Item>}


            </Pagination>

            <Pagination>
                <Pagination.Item onClick={loadItems}>LOAD</Pagination.Item>
            </Pagination>

            <Pagination>
                <Pagination.Item disabled={currentActivePaginationItem === 1} onClick={loadPreviousItems} >BACK</Pagination.Item>
                <Pagination.Item onClick={loadNextItems} >NEXT</Pagination.Item>
            </Pagination>

        </div >
    )
};


export default Loader;