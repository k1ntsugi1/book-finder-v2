import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkAPI, IResponseItem } from './interfaces';

import parseResponseItems, { ParsedItem } from '../../utils/parseResponseItems';
import createURLsByStarredItemsIDs from '../../utils/createURLsByStarredItemsIDs';

interface IResultOfSearching {
  items: ParsedItem[];
}

const fetchGetDataByStarredItemsIDs = createAsyncThunk<IResultOfSearching, void, IThunkAPI>(
  'fetchDataByStarredItemsIDs',
  async (_, thunkAPI) => {
    try {
      const { ids, entities } = thunkAPI.getState().dataOfStarredItems;
      const untouchedIds = ids.filter((id) => !entities[id]);
      const urls = createURLsByStarredItemsIDs(untouchedIds);

      const responses = await Promise.all(urls.map((url) => axios.get<IResponseItem>(url)));

      const parsedItems = responses.flatMap((response) => parseResponseItems([response.data]));

      return { items: parsedItems };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

export default fetchGetDataByStarredItemsIDs;
