import { Form } from "react-bootstrap";
import RotateCard from "../../../../RotateCard";
import { IStylingItemProps } from "../interfaces";

const StylingScrollLoaderItem: React.FC<IStylingItemProps> = (props) => {
    const { stateImmer, dispatchImmer, classNamesOfRotatingCard } = props;
    return (
        <RotateCard
            classnames={classNamesOfRotatingCard}
            backFaceOfCard={
                <Form.Control
                    className="w-75"
                    type="color"
                    name="scrollLoaderColor"
                    value={stateImmer.colors.scrollLoaderColor}
                    onChange={(event) => dispatchImmer({ type: 'updateScrollLoaderColor', value: event.target.value })}
                    aria-label="select-color"
                />
            }
            frontFaceOfCard={
                <Form.Label className='ms-3'>Select ScrollLoader</Form.Label>
            }
        />

    )
};

export default StylingScrollLoaderItem;