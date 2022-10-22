import { createAsyncThunk } from "@reduxjs/toolkit";
import createURL from "../helpersFunc/createUrl";
import { ParsedItem } from "../helpersFunc/parseResponseItems";
import axios from 'axios';
import { RootState, AppDispatch } from "./index";
import parseResponseItems from '../helpersFunc/parseResponseItems';

export interface DataOfSearchingParams {
    [key: string]: string | number,
    currentNameOfItem: string,
    currentAuthorOfItem: string,
    currentTypeOfCategory: string,
    currentTypeOfOrder: string,
    currentTypeOfItem: string,
    currentTypeOfFilter: string,
}

interface ResultOfSearching {
    items: ParsedItem[],
    totalItems: number,
    startIndex: number,
    isNewRequest: boolean,
    searchParams: DataOfSearchingParams,
}

export interface ThunkAPI {
    state: RootState,
    dispatch: AppDispatch,
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

            const { range: { startIndex, maxResults }, searchParams: previousSearchParams } = state.dataOfSearching;

            const isNewRequest = Object.entries(searchParams).find(([key, value]) => value as string !== previousSearchParams[key]) ? true : false;
            const currentStartIndex = isNewRequest ? 0 : startIndex;

            const url = createURL({ ...searchParams, ...{startIndex: currentStartIndex, maxResults} });
            const response = await axios.get<ResponseData>(url);
            const { totalItems, items } = response.data;
    
            const parsedItems = parseResponseItems(items)
    
            return { searchParams, items: parsedItems, totalItems, startIndex: currentStartIndex + maxResults, isNewRequest};
        } catch(error) {
            return thunkAPI.rejectWithValue({error})
        }
        
    }
);

export default fetchDataAsyncThunk