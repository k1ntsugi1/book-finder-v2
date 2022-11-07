import { Pagination } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import fetchGetDataBySearchingOptions from '../../store/asyncThunks/fetchGetDataBySearchingOptions';

import { actionsDataOfSearchedItems } from '../../store/slices/dataOfSearchedItemsSlice';

const Loader: React.FC = () => {
  const appDispatch = useAppDispatch();

  const {
    searchParams,
    range: { startIndex, maxResults }
  } = useAppSelector((store) => store.dataOfSearchedItems);
  const { totalItems } = useAppSelector((store) => store.dataOfSearchedItems);

  const pagesCount = Math.floor(totalItems / maxResults);
  const currentActivePaginationItem = startIndex / maxResults;

  const loadItems = () => {
    appDispatch(fetchGetDataBySearchingOptions(searchParams));
  };

  const loadNextItems = () => {
    appDispatch(actionsDataOfSearchedItems.removeItems());
    loadItems();
  };

  const loadPreviousItems = () => {
    appDispatch(actionsDataOfSearchedItems.removeItems());
    appDispatch(actionsDataOfSearchedItems.decreaseStartIndexOnMaxResultsValue());
    loadItems();
  };

  const loadItemsByPaginationNumber = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!(e.target instanceof HTMLElement)) return;
    const num = Number(e.target.textContent) - 1;
    appDispatch(actionsDataOfSearchedItems.removeItems());
    appDispatch(actionsDataOfSearchedItems.updateStartIndexByPaginationNum({ num }));
    loadItems();
  };

  return (
    <div className="loader color-text mt-5 d-flex flex-wrap gap-3 position-relative w-100 mx-5">
      <Pagination onClick={loadItemsByPaginationNumber}>
        {currentActivePaginationItem > 3 && <Pagination.Item>{1}</Pagination.Item>}

        {currentActivePaginationItem >= 5 && <Pagination.Ellipsis disabled />}

        {currentActivePaginationItem > 2 && (
          <Pagination.Item>{currentActivePaginationItem - 2}</Pagination.Item>
        )}

        {currentActivePaginationItem > 1 && (
          <Pagination.Item>{currentActivePaginationItem - 1}</Pagination.Item>
        )}

        {<Pagination.Item active>{currentActivePaginationItem}</Pagination.Item>}

        {currentActivePaginationItem <= pagesCount - 1 && (
          <Pagination.Item>{currentActivePaginationItem + 1}</Pagination.Item>
        )}

        {currentActivePaginationItem <= pagesCount - 2 && (
          <Pagination.Item>{currentActivePaginationItem + 2}</Pagination.Item>
        )}

        {currentActivePaginationItem <= pagesCount - 4 && <Pagination.Ellipsis disabled />}

        {currentActivePaginationItem <= pagesCount - 3 && (
          <Pagination.Item>{pagesCount}</Pagination.Item>
        )}
      </Pagination>

      <Pagination>
        <Pagination.Item onClick={loadItems}>LOAD</Pagination.Item>
      </Pagination>

      <Pagination>
        <Pagination.Item disabled={currentActivePaginationItem === 1} onClick={loadPreviousItems}>
          BACK
        </Pagination.Item>
        <Pagination.Item onClick={loadNextItems}>NEXT</Pagination.Item>
      </Pagination>
    </div>
  );
};

export default Loader;
