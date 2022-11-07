import { IInitialStateImmer } from "../components/sidebarField/settingSection/interfaces";

const saveOptionsOfSettingSection = (state: IInitialStateImmer): void => {
    const {
        images: {
            activeImage,
            bodyImages
        },
        colors: {
            bodyColor,
            sidebarColor,
            textColor,
            progressBarColor,
        },
        stateOfBodyBackground,

    } = state;

    localStorage.setItem('bodyColor', bodyColor);
    localStorage.setItem('sidebarColor', sidebarColor);
    localStorage.setItem('textColor', textColor);
    localStorage.setItem('progressBarColor', progressBarColor);
    localStorage.setItem('stateOfBodyBackground', stateOfBodyBackground);
    localStorage.setItem('activeImage', activeImage);
    localStorage.setItem('bodyImages', JSON.stringify(bodyImages));
}

export default saveOptionsOfSettingSection;