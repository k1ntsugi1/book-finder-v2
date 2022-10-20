import { FormikProps } from "formik"

export interface IInitialValueOfFormik {
    currentNameOfItem: string,
    currentAuthorOfItem: string,
    currentTypeOfCategory: string,
    currentTypeOfOrder: string,
    currentTypeOfItem: string,
    currentTypeOfFilter: string,
}

export interface ISearchItemsProps {
    formik: FormikProps<IInitialValueOfFormik>
}

export interface IContextOfSearchOptions {
    [index: string]: string[],
    typesOfFilter: string[],
    typesOfOrder: string[],
    typesOfCategory: string[],
    typesOfItem: string[],
}