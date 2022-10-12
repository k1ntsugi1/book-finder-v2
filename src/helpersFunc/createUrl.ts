import { DataOfSearchingParams } from "../store/fetchDataAsyncThunk";

interface SearchParams extends DataOfSearchingParams {
    startIndex: number,
    maxResults : number,
}

const createURL = (searchParams: SearchParams): string => {
    const url = new URL('https://www.googleapis.com/books/v1/volumes?');
    
    const { 
        currentNameOfItem,
        currentAuthorOfItem,
        currentTypeOfCategory,
        currentTypeOfOrder,
        currentTypeOfItem,
        currentTypeOfFilter,
        startIndex,
        maxResults,
    } = searchParams;

    const authorOfItem = currentAuthorOfItem.length ? `+inauthor:${currentAuthorOfItem}` : '';
    const categoryOfItem = currentTypeOfCategory !== 'all' ? `+subject:${currentTypeOfCategory}` : '';

    const q = `${currentNameOfItem}${authorOfItem}${categoryOfItem}`

    url.searchParams.set('q', q);
    url.searchParams.set('orderBy', currentTypeOfOrder);
    url.searchParams.set('filter', currentTypeOfFilter);
    url.searchParams.set('printType ', currentTypeOfItem);
    url.searchParams.set('startIndex ', `${startIndex}`);
    url.searchParams.set('maxResults ', `${maxResults}`);
    url.searchParams.set('key', 'AIzaSyBqzQ4Z66g5kISJG2QrjMdANI61Fw2hWKo');

    return url.toString();
}

export default createURL;