import { IDataOfSearchingParams } from '../store/asyncThunks/interfaces';

interface ISearchParams extends IDataOfSearchingParams {
  startIndex: string;
  maxResults: string;
}

const createURLBySearchingOptions = (searchParams: ISearchParams): string => {
  const url = new URL('books/v1/volumes', 'https://www.googleapis.com');

  const {
    currentNameOfItem,
    currentAuthorOfItem,
    currentTypeOfCategory,
    currentTypeOfOrder,
    currentTypeOfItem,
    currentTypeOfFilter,
    startIndex,
    maxResults
  } = searchParams;

  const authorOfItem = currentAuthorOfItem.length ? `+inauthor:${currentAuthorOfItem}` : '';
  const categoryOfItem = currentTypeOfCategory !== 'all' ? `+subject:${currentTypeOfCategory}` : '';

  const q = `${currentNameOfItem}${authorOfItem}${categoryOfItem}`;

  url.searchParams.set('q', q);

  if (currentTypeOfOrder !== 'all') url.searchParams.set('orderBy', currentTypeOfOrder);
  if (currentTypeOfFilter !== 'all') url.searchParams.set('filter', currentTypeOfFilter);
  if (currentTypeOfItem !== 'all') url.searchParams.set('printType', currentTypeOfItem);

  url.searchParams.set('key', 'AIzaSyBqzQ4Z66g5kISJG2QrjMdANI61Fw2hWKo');
  url.searchParams.set('startIndex ', startIndex);
  url.searchParams.set('maxResults ', maxResults);

  return url.toString().replace(/\+/g, '');
};

export default createURLBySearchingOptions;
