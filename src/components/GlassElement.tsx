import cn from 'classnames';

interface IGlassElement {
    classesOfContainer: {
        [key: string]: string,
    },
    stylesOfContainer: {
        [key: string]: string,
    },
    stylesOfFrontFace: {
        [key: string]: string,
    },
    children: React.ReactNode,
}

const GlassElement: React.FC<IGlassElement> = (props) => {
    const {
        classesOfContainer,
        stylesOfContainer,
        stylesOfFrontFace,
        children
    } = props;

    const classesOfContainerGlass = cn('container-glass',classesOfContainer)

    return (
        <div className={classesOfContainerGlass} style={stylesOfContainer}>
            <div className="back-face-of-glass"></div>
            <div className="front-face-of-glass" style={stylesOfFrontFace}>
                {children}
            </div>
        </div>

    )
};

export default GlassElement;