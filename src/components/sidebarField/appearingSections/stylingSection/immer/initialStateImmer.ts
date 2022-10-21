import DefaultImageBackground from '../../../../../assets/images/back2.jpg';


const initialStateImmer = {
    stateOfBodyBackground: localStorage.getItem('stateOfBackground') ?? 'image',
    images: {
        activeImage: localStorage.getItem('activeImage') ?? DefaultImageBackground,
        bodyImages: JSON.parse(localStorage.getItem('backgroundImages') ?? JSON.stringify([DefaultImageBackground] )) as string[]
    },
    colors: {
        bodyColor: localStorage.getItem('bodyColor') ?? '#001eff',
        cardColor: localStorage.getItem('cardColor') ?? 'rgba(255, 255, 255, 0.95)',
        sideBarColor: localStorage.getItem('sideBarColor') ?? 'white',
        textColor: localStorage.getItem('textColor') ?? '#5769e9',
        scrollLoaderColor: localStorage.getItem('scrollLoaderColor') ?? '#78a1a1',
    },
}

export default initialStateImmer;

