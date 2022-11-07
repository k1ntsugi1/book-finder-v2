import DefaultImageBackground from '../../../../assets/images/back2.jpg';


const initialStateImmer = {
    stateOfBodyBackground: localStorage.getItem('stateOfBodyBackground') ?? 'color',
    images: {
        activeImage: localStorage.getItem('activeImage') ?? DefaultImageBackground,
        bodyImages: JSON.parse(localStorage.getItem('bodyImages') ?? JSON.stringify([DefaultImageBackground] )) as string[]
    },
    colors: {
        bodyColor: localStorage.getItem('bodyColor') ?? 'rgb(236 82 82)',
        sidebarColor: localStorage.getItem('sidebarColor') ?? 'white',
        textColor: localStorage.getItem('textColor') ?? 'black',
        progressBarColor: localStorage.getItem('progressBarColor') ?? 'rgb(102 212 129)',
    },
}

export default initialStateImmer;

