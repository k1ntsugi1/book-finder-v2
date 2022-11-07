import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkAPI, IResponseItem } from './interfaces';

import { ParsedItem } from '../../utils/parseResponseItems';
import parseResponseItems from '../../utils/parseResponseItems';
import createURLsByStarredItemsIDs from '../../utils/createURLsByStarredItemsIDs';

interface IResultOfSearching {
  items: ParsedItem[];
}

const fetchGetDataByStarredItemsIDs = createAsyncThunk<IResultOfSearching, void, IThunkAPI>(
  'fetchDataByStarredItemsIDs',
  async (_, thunkAPI) => {
    try {
      const { ids } = thunkAPI.getState().dataOfStarredItems;

      const urls = createURLsByStarredItemsIDs(ids);

      const responses = await Promise.all(urls.map((url) => axios.get<IResponseItem>(url)));

      const parsedItems = responses.flatMap((response) => parseResponseItems([response.data]));

      return { items: parsedItems };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

export default fetchGetDataByStarredItemsIDs;
