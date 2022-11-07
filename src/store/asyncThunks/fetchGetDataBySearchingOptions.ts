import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkAPI, IResponseItem, IDataOfSearchingParams } from './interfaces';

import createURLBySearchingOptions from '../../utils/createURLBySearchingOptions';
import { ParsedItem } from '../../utils/parseResponseItems';
import parseResponseItems from '../../utils/parseResponseItems';

interface IResultOfSearching {
  items: ParsedItem[];
  totalItems: number;
  startIndex: number;
  isNewRequest: boolean;
  searchParams: IDataOfSearchingParams;
}

interface IResponseData {
  kind: string;
  totalItems: number;
  items: IResponseItem[];
}

const fetchGetDataBySearchingOptions = createAsyncThunk<
  IResultOfSearching,
  IDataOfSearchingParams,
  IThunkAPI
>('fetchData', async (searchParams, thunkAPI) => {
  try {
    const {
      range: { startIndex, maxResults },
      searchParams: previousSearchParams
    } = thunkAPI.getState().dataOfSearchedItems;

    const isNewRequest = Object.entries(searchParams).find(
      ([key, value]) => value !== previousSearchParams[key]
    )
      ? true
      : false;
    const currentStartIndex = isNewRequest ? 0 : startIndex;

    const url = createURLBySearchingOptions({
      ...searchParams,
      ...{
        startIndex: `${currentStartIndex}`,
        maxResults: `${maxResults}`
      }
    });

    const response = await axios.get<IResponseData>(url);
    const { totalItems, items } = response.data;

    const parsedItems = parseResponseItems(items);

    return {
      searchParams,
      items: parsedItems,
      totalItems,
      startIndex: currentStartIndex + maxResults,
      isNewRequest
    };
  } catch (error) {
    return thunkAPI.rejectWithValue({ error });
  }
});

export default fetchGetDataBySearchingOptions;
