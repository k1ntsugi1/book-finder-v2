import { DataOfSearchingParams } from "../store/fetchDataAsyncThunk";

interface SearchParams extends DataOfSearchingParams {
    startIndex: number,
    maxResults : number,
}

const createURL = (searchParams: SearchParams): string => {
    const url = new URL('books/v1/volumes', 'https://www.googleapis.com');
    
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
    // console.log(searchParams)
    // const authorOfItem = currentAuthorOfItem.length ? `+inauthor:${currentAuthorOfItem}` : '';
    // const categoryOfItem = currentTypeOfCategory !== 'all' ? `+subject:${currentTypeOfCategory}` : '';

    // const q = `${currentNameOfItem}${authorOfItem}${categoryOfItem}`

    // url.searchParams.set('q', q);
    // url.searchParams.set('orderBy', currentTypeOfOrder);
    // url.searchParams.set('filter', currentTypeOfFilter);
    // url.searchParams.set('printType ', currentTypeOfItem);
    // url.searchParams.set('startIndex ', `${startIndex}`);
    // url.searchParams.set('maxResults ', `${maxResults}`);
    // url.searchParams.set('key', 'AIzaSyBqzQ4Z66g5kISJG2QrjMdANI61Fw2hWKo');
    const mainUrl = 'https://www.googleapis.com/books/v1/volumes?';
    const q = `q=${currentNameOfItem}`;
    const categories = currentTypeOfCategory === 'all' ? '' : `+subject:${currentTypeOfCategory}`;
    const orderBy = `&orderBy=${currentTypeOfOrder}`;
    const startIndex2 = `&startIndex=${startIndex}`;
    const maxResults2 = '&maxResults=30'
    const key = `&key=AIzaSyBqzQ4Z66g5kISJG2QrjMdANI61Fw2hWKo`

    // return decodeURI(url.toString());
    return mainUrl + q + categories + orderBy + key + startIndex2 + maxResults2;
}

export default createURL;