import type { FormikProps } from 'formik';

export interface IInitialValueOfFormik {
  currentNameOfItem: string;
  currentAuthorOfItem: string;
  currentTypeOfCategory: string;
  currentTypeOfOrder: string;
  currentTypeOfItem: string;
  currentTypeOfFilter: string;
}

export interface ISearchItemsProps {
  formik: FormikProps<IInitialValueOfFormik>;
  className: string;
}

export interface IContextOfSearchOptions {
  [index: string]: string[];
  typesOfFilter: string[];
  typesOfOrder: string[];
  typesOfCategory: string[];
  typesOfItem: string[];
}
