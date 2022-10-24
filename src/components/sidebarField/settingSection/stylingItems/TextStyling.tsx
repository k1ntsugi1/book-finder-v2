import { Form } from "react-bootstrap";
import RotateCard from "../../../RotateCard";
import { IStylingItemProps } from "../interfaces";

const TextStyling: React.FC<IStylingItemProps> = (props) => {
    const { stateImmer, dispatchImmer, classNamesOfRotatingCard } = props;
    return (
        <RotateCard
            classnames={classNamesOfRotatingCard}
            backFaceOfCard={
                <>
                    <Form.Control
                        className="w-75 mx-auto"
                        type="color"
                        name="textColor"
                        value={stateImmer.colors.textColor}
                        onChange={(event) => dispatchImmer({ type: 'updateTextColor', value: event.target.value })}
                        aria-label="select-color"
                    />
                </>
            }
            frontFaceOfCard={
                <Form.Label className='ms-3'>Text</Form.Label>
            }
        />
    )
};

export default TextStyling;