import cn from 'classnames';

interface IGlassElement {
    classesOfContainer?: string,
    classesOfFrontFace?: string,
    stylesOfContainer?: {
        [key: string]: string,
    },
    stylesOfFrontFace?: {
        [key: string]: string,
    },
    children?: React.ReactNode,
}

const GlassElement: React.FC<IGlassElement> = (props) => {
    const {
        classesOfContainer,
        classesOfFrontFace,
        stylesOfContainer,
        stylesOfFrontFace,
        children
    } = props;

    const classesOfContainerGlass = cn('container-glass',classesOfContainer)
    const classesOfFrontFaceGlass = cn('front-face-of-glass', classesOfFrontFace)
    return (
        <div className={classesOfContainerGlass} style={stylesOfContainer}>
            <div className="back-face-of-glass"></div>
            <div className={classesOfFrontFaceGlass} style={stylesOfFrontFace}>
                {children}
            </div>
        </div>

    )
};

export default GlassElement;