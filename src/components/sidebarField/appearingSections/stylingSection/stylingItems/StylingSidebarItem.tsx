import { Form } from "react-bootstrap";
import RotateCard from "../../../../RotateCard";
import { IStylingItemProps } from "../interfaces";

const StylingSidebarItem: React.FC<IStylingItemProps> = (props) => {
    const { stateImmer, dispatchImmer, classNamesOfRotatingCard } = props;
    return (
        <RotateCard
            classnames={classNamesOfRotatingCard}
            backFaceOfCard={
                <Form.Control
                    className="w-75"
                    type="color"
                    name="sidebarColor"
                    value={stateImmer.colors.sideBarColor}
                    onChange={(event) => dispatchImmer({ type: 'updateSidebarColor', value: event.target.value })}
                    aria-label="select-color"
                />
            }
            frontFaceOfCard={
                <Form.Label>Select sidebar color</Form.Label>
            }
        />
    )
};

export default StylingSidebarItem;