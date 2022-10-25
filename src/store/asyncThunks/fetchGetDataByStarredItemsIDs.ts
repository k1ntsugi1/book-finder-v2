import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkAPI, IResponseItem } from "./interfaces";

import { ParsedItem } from "../../helpersFunc/parseResponseItems";
import parseResponseItems from '../../helpersFunc/parseResponseItems';
import createURLsByStarredItemsIDs from '../../helpersFunc/createURLsByStarredItemsIDs';


interface IResultOfSearching {
    items: ParsedItem[],
};

const fetchGetDataByStarredItemsIDs = createAsyncThunk<IResultOfSearching, void, IThunkAPI>(
    'fetchDataByStarredItemsIDs',
    async (_, thunkAPI) => {
        
        const { ids } = thunkAPI.getState().dataOfStarredItems;
         
        const urls = createURLsByStarredItemsIDs(ids);

        const responses = await Promise.all(urls.map(url => axios.get<IResponseItem>(url)));

        const parsedItems = responses.flatMap(response => parseResponseItems([response.data]));

        return {items: parsedItems}
    }
)

export default fetchGetDataByStarredItemsIDs