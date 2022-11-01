import initialStateImmer from "./immer/initialStateImmer";

export type IInitialStateImmer = typeof initialStateImmer;

export interface IActionOfReducerImmer {
    type: string,
    value?: string
}

export type IDispatchImmer = (value: IActionOfReducerImmer) => void

export interface IProps {
    stateImmer: IInitialStateImmer,
    dispatchImmer: IDispatchImmer,
}



