import { Form } from "react-bootstrap";
import RotateCard from "../../../RotateCard";

import { IProps } from '../interfaces';

const StylingCardItem: React.FC<IProps> = (props) => {

    const { dispatchImmer } = props;
    
    return (
        <RotateCard
            backFaceOfCard={
                <Form.Control
                    className="w-75 mx-auto"
                    type="color"
                    name="cardColor"
                    
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