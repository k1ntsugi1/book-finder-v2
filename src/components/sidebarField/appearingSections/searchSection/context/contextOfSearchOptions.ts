import { createContext } from "react";

import { IContextOfSearchOptions } from "../interfaces";

const contextOfSearchOptions = createContext<IContextOfSearchOptions>({
    typesOfFilter: [],
    typesOfOrder: [],
    typesOfCategory: [],
    typesOfItem: []
});

export default contextOfSearchOptions;