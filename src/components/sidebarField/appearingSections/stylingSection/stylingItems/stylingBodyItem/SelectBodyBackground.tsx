import { ISelectBodyBackground } from "../../interfaces";

const SelectBodyBackground: React.FC<ISelectBodyBackground> = (props) => {

    const { stateImmer, dispatchImmer } = props;

    return (
        <div className="d-flex flex-wrap gap-2">
            {stateImmer.images.bodyImages.map(imageURL => {
                return (
                    <img
                        src={imageURL}
                        alt="imgItem"
                        className="p-1 w-25 h-100 cursor-pointer border"
                        key={imageURL}
                        id={imageURL}
                        onClick={() => {
                            dispatchImmer({ type: 'updateStateOfBodyBackground', value: 'image' });
                            dispatchImmer({ type: 'updateActiveImage', value: imageURL })
                        }} />
                )
            })}
            <div
                className="w-25 p-1 border centered-content border cursor-pointer"
                onClick={() => dispatchImmer({ type: 'updateStateOfBodyBackground', value: 'color' })}
            >
                <div className="w-100 h-100" style={{ 'background': 'var(--color-body)' }}></div>
            </div>
        </div>

    )
};

export default SelectBodyBackground;