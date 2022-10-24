import { ResponseItem } from "../store/fetchDataAsyncThunk";

type Item = string | null;

export interface ParsedItem {
    id: string,
    title: Item,
    subtitle: Item,
    authors: Item,
    publisher: Item,
    publishedDate: Item,
    printType: Item,
    categories: Item,
    pageCount: Item,
    language: Item,
    description: Item,
    imgUrl: Item,
}


const parseResponseItems = (items: ResponseItem[]): ParsedItem[] => {
    const parsedItems = items.map(item => {

        const volumeInfo = item.volumeInfo;
        const {
            title = null,
            subtitle = null,
            authors,
            publisher = null,
            publishedDate = null,
            printType = null,
            categories,
            pageCount,
            language = null,
            description = null,
        } = volumeInfo;

        return {
            id: item.id,
            title,
            subtitle,
            authors: authors ? authors.join(', ') : null,
            publisher,
            publishedDate,
            printType,
            categories: categories ? categories.join(', ') : null,
            pageCount: pageCount ? `${pageCount}` : null,
            language,
            description,
            imgUrl: volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : null,
        }
    });
    return parsedItems;
};

export default parseResponseItems;