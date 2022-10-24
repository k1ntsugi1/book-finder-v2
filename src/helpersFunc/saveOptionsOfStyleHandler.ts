import { IInitialStateImmer } from "../components/sidebarField/settingSection/interfaces";

const saveOptionsOfStyleHandler = (state: IInitialStateImmer): void => {
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
        stateOfBodyBackground,

    } = state;

    localStorage.setItem('bodyColor', bodyColor);
    localStorage.setItem('sideBarColor', sideBarColor);
    localStorage.setItem('cardColor', cardColor);
    localStorage.setItem('textColor', textColor);
    localStorage.setItem('scrollLoaderColor', scrollLoaderColor);
    localStorage.setItem('stateOfBackground', stateOfBodyBackground);
    localStorage.setItem('activeImage', activeImage);
    localStorage.setItem('bodyImages', JSON.stringify(bodyImages));
}

export default saveOptionsOfStyleHandler;