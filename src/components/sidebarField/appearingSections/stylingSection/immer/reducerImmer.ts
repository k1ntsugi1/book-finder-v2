import { IInitialStateImmer, IActionOfReducerImmer } from "../interfaces";
import initialStateImmer from "./initialStateImmer";

const reducerImmer = (draft: IInitialStateImmer, action: IActionOfReducerImmer) => {

    const { type, value } = action;
    if (value == null) return initialStateImmer;

    const mappingAction: {[key: string]: () => void} = {

        updateBodyColor() {
            draft.colors.bodyColor = value;
        },
        updateCardColor() {
            draft.colors.cardColor = value;
        },
        updateSidebarColor() {
            draft.colors.sideBarColor = value;
        },
        updateTextColor() {
            draft.colors.textColor = value;
        },
        updateStateOfBodyBackground() {
            draft.stateOfBodyBackground = value;
        },
        updateScrollLoaderColor() {
            draft.colors.scrollLoaderColor = value;
        },
        updateActiveImage() {
            draft.images.activeImage = value;
        },
        updateBodyImages() {
            draft.images.bodyImages.push(value);
            draft.images.activeImage = value;
        }
    };

    mappingAction[type]();
    return void draft;
};

export default reducerImmer;