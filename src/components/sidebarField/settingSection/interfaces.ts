import initialStateImmer from "./immer/initialStateImmer";

export type IInitialStateImmer = typeof initialStateImmer;

export interface IActionOfReducerImmer {
    type: string,
    value?: string
}

export interface IAxiosResponseData {
    data: {
        url: string,
    }
}

export interface IStylingItemProps {
    stateImmer: IInitialStateImmer,
    dispatchImmer: (value: IActionOfReducerImmer) => void,
    classNamesOfRotatingCard: string,
}

export interface IStylingBodyItemProps {
    stateImmer: IInitialStateImmer,
    dispatchImmer: (value: IActionOfReducerImmer) => void,
    classNamesOfRotatingCard: string,
}

export interface IUploadBodyBackgroundImage {
    dispatchImmer: (value: IActionOfReducerImmer) => void,
    classNamesOfRotatingCard: string,
}

export interface ISelectBodyBackground {
    stateImmer: IInitialStateImmer,
    dispatchImmer: (value: IActionOfReducerImmer) => void,
}
