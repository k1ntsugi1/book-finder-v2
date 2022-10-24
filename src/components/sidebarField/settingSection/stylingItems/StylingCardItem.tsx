import { Form } from "react-bootstrap";
import RotateCard from "../../../RotateCard";
import { IStylingItemProps } from "../interfaces";

const StylingCardItem: React.FC<IStylingItemProps> = (props) => {
    const { stateImmer, dispatchImmer, classNamesOfRotatingCard } = props;
    return (
        <RotateCard
            classnames={classNamesOfRotatingCard}
            backFaceOfCard={
                <Form.Control
                    className="w-75 mx-auto"
                    type="color"
                    name="cardColor"
                    value={stateImmer.colors.cardColor}
                    onChange={(event) => dispatchImmer({ type: 'updateCardColor', value: event.target.value })}
                    aria-label="select-color"
                />
            }
            frontFaceOfCard={
                <Form.Label className='ms-3'>Select card color</Form.Label>
            }
        />
    )
};

export default StylingCardItem;