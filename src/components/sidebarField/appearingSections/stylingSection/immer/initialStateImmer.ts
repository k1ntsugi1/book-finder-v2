import DefaultImageBackground from '../../../../../assets/images/back2.jpg';


const initialStateImmer = {
    stateOfBodyBackground: localStorage.getItem('stateOfBackground') ?? 'image',
    images: {
        activeImage: localStorage.getItem('activeImage') ?? DefaultImageBackground,
        bodyImages: JSON.parse(localStorage.getItem('backgroundImages') ?? JSON.stringify({ active: 0, images: [DefaultImageBackground] })) as string[]
    },
    colors: {
        bodyColor: localStorage.getItem('bodyColor') ?? 'rgba(255, 255, 255, 0.95)',
        cardColor: localStorage.getItem('cardColor') ?? 'rgba(255, 255, 255, 0.95)',
        sideBarColor: localStorage.getItem('sideBarColor') ?? 'rgba(255, 255, 255, 0.95)',
        textColor: localStorage.getItem('textColor') ?? '#FAFFFF',
        scrollLoaderColor: localStorage.getItem('scrollLoaderColor') ?? '#78a1a1',
    },
}

export default initialStateImmer;

