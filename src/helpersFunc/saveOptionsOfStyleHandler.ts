import { IInitialStateImmer } from "../components/sidebar/brush/BrushSection";

const saveOptionsOfStyleHandler = (state:IInitialStateImmer): void => {
    const { 
        colors: {
            bodyColor,
            sideBarColor,
            textColor,
            scrollLoaderColor,
        },
        stateOfBackground 
    } = state;

    localStorage.setItem('bodyColor', bodyColor);
    localStorage.setItem('sideBarColor', sideBarColor);
    localStorage.setItem('textColor', textColor);
    localStorage.setItem('scrollLoaderColor', scrollLoaderColor);
    localStorage.setItem('stateOfBackground', stateOfBackground);
}

export default saveOptionsOfStyleHandler;