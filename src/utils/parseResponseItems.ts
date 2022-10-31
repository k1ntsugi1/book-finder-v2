import { IResponseItem } from "../store/asyncThunks/interfaces";

type TPropOfParsedItem = string | null;

export interface ParsedItem {
    id: string,
    title: TPropOfParsedItem,
    subtitle: TPropOfParsedItem,
    authors: TPropOfParsedItem,
    publisher: TPropOfParsedItem,
    publishedDate: TPropOfParsedItem,
    printType: TPropOfParsedItem,
    categories: TPropOfParsedItem,
    pageCount: TPropOfParsedItem,
    language: TPropOfParsedItem,
    description: TPropOfParsedItem,
    imgUrl: TPropOfParsedItem,
}


const parseResponseItems = (items: IResponseItem[]): ParsedItem[] => {
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