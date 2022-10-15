import { IInitialStateImmer } from "../components/sidebar/brush/BrushSection";

const saveOptionsOfStyleHandler = (state:IInitialStateImmer): void => {
    const {
        images: {
            activeImage,
            bodyImages
        },
        colors: {
            bodyColor,
            sideBarColor,
            cardColor,
            textColor,
            scrollLoaderColor,
        },
        stateOfBackground,

    } = state;

    localStorage.setItem('bodyColor', bodyColor);
    localStorage.setItem('sideBarColor', sideBarColor);
    localStorage.setItem('cardColor', cardColor);
    localStorage.setItem('textColor', textColor);
    localStorage.setItem('scrollLoaderColor', scrollLoaderColor);
    localStorage.setItem('stateOfBackground', stateOfBackground);
    localStorage.setItem('activeImage', activeImage);
    localStorage.setItem('bodyImages', JSON.stringify(bodyImages));
}

export default saveOptionsOfStyleHandler;