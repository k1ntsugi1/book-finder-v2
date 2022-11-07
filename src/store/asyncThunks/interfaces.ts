import { RootState, AppDispatch } from '../index';

export interface IThunkAPI {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: {
    error: any;
  };
}

export interface IResponseItem {
  id: string;
  volumeInfo: {
    title?: string;
    subtitle?: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    printType?: string;
    categories?: string[];
    pageCount?: number;
    language?: string;
    description?: string;
    imageLinks?: {
      smallThumbnail: string;
    };
  };
}

export interface IDataOfSearchingParams {
  [key: string]: string;
  currentNameOfItem: string;
  currentAuthorOfItem: string;
  currentTypeOfCategory: string;
  currentTypeOfOrder: string;
  currentTypeOfItem: string;
  currentTypeOfFilter: string;
}
