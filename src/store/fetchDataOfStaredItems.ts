import { createAsyncThunk } from "@reduxjs/toolkit";
import { ResponseItem, ThunkAPI } from "./fetchDataAsyncThunk";
import { ParsedItem } from "../helpersFunc/parseResponseItems";
import createURLsForStaredItems from '../helpersFunc/createURLsForStaredItems';
import axios from "axios";
import parseResponseItems from '../helpersFunc/parseResponseItems';

interface ResultOfSearching {
    items: ParsedItem[],
};

const fetchDataOfStaredItems = createAsyncThunk<ResultOfSearching, void, ThunkAPI>(
    'fetchDataOfStaredItems',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const { ids } = state.dataOfStaredItems;
         
        const urls = createURLsForStaredItems(ids);
        const responses = await Promise.all(urls.map(url => axios.get<ResponseItem>(url)));
        const parsedItems = responses.flatMap(response => parseResponseItems([response.data]));
        return {items: parsedItems}
    }
)

export default fetchDataOfStaredItems