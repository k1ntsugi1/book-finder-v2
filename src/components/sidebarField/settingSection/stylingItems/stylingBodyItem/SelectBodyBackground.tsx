import { IProps } from '../../interfaces'

const SelectBodyBackground: React.FC<IProps> = (props) => {

    const { stateImmer, dispatchImmer } = props;

    return (
        <div className="scrollbar m-3 p-3 border-top border-bottom d-flex flex-nowrap overflow-auto gap-2">
            <div
                className="w-50px flex-shrink-0 p-1 border centered-content border cursor-pointer"
                onClick={() => dispatchImmer({ type: 'updateStateOfBodyBackground', value: 'color' })}
            >
                <div className="background-color-body w-100 h-100" ></div>
            </div>
            {stateImmer.images.bodyImages.map(imageURL => {
                return (
                    <img
                        src={imageURL}
                        alt="imgItem"
                        className="p-1 w-50px h-100 cursor-pointer border"
                        key={imageURL}
                        id={imageURL}
                        onClick={() => {
                            dispatchImmer({ type: 'updateStateOfBodyBackground', value: 'image' });
                            dispatchImmer({ type: 'updateActiveImage', value: imageURL })
                        }} />
                )
            })}
        </div>
    )
};

export default SelectBodyBackground;