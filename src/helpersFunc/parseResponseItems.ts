import { ResponseItem } from "../store/fetchDataAsyncThunk";

export interface ParsedItem {
    id: string;
    imgUrl: string;
    name: string;
    pageCount: number;
    categories: string[];
    authors: string[];
    description: string;
}


const parseResponseItems = (items: ResponseItem[]): ParsedItem[] => {
    const parsedItems = items.map(item => {
        const volumeInfo = item.volumeInfo;
        const id = item.id
        const name = volumeInfo.title || '';
        const pageCount = volumeInfo.pageCount || 0;

        const imgUrl = volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : '';

        const categories = volumeInfo.categories || [''];
        const authors = volumeInfo.authors || [''];
        const description = volumeInfo.description || ''

        return { id, imgUrl, name, categories, authors, description, pageCount }
    });
    return parsedItems;
};

export default parseResponseItems;