import { createAsyncThunk } from "@reduxjs/toolkit";
import createURL from "../helpersFunc/createUrl";
import { ParsedItem } from "../helpersFunc/parseResponseItems";
import axios from 'axios';
import { RootState } from "./index";
import parseResponseItems from '../helpersFunc/parseResponseItems';

interface ResultOfSearching {
     items: ParsedItem[],
     totalItems: number,
     startIndex: number,
     statusOfRequest: string,
}
export interface DataOfSearchingParams {
    currentNameOfItem: string,
    currentAuthorOfItem: string,
    currentTypeOfCategory: string,
    currentTypeOfOrder: string,
    currentTypeOfItem: string,
    currentTypeOfFilter: string,
}

interface ThunkAPI {
    state: RootState,
    rejectValue: {
        error: any;
    },
}

export interface ResponseItem {
    id: string,
    volumeInfo: {
        title?: string,
        authors?: string[],
        description?: string,
        pageCount?: number,
        categories?: string[],
        contentVersion: string,
        imageLinks?: {
            smallThumbnail: string,
            thumbnail: string
        },
        language: string,
    },
};

interface ResponseData {
    kind: string
    totalItems: number,
    items: ResponseItem[]
};

const fetchDataAsyncThunk = createAsyncThunk<ResultOfSearching, DataOfSearchingParams, ThunkAPI>(
    'fetchData',
    async (searchParams, thunkAPI) => {
        try {
            const state = thunkAPI.getState()

            const { range: { startIndex, maxResults }, statusOfRequest } = state.dataOfSearching;
            const currentStartIndex = statusOfRequest === 'new' ? 0 : startIndex;
    
            const url = createURL({ ...searchParams, ...{startIndex: currentStartIndex, maxResults} });
            const response = await axios.get<ResponseData>(url);
            const { totalItems, items } = response.data;
    
            const parsedItems = parseResponseItems(items)
    
            return { items: parsedItems, totalItems, startIndex: currentStartIndex + maxResults, statusOfRequest }
        } catch(error) {
            return thunkAPI.rejectWithValue({error})
        }
        
    }
);

export default fetchDataAsyncThunk