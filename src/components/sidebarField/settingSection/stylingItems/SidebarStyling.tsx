import { Form } from "react-bootstrap";
import RotateCard from "../../../RotateCard";
import { IStylingItemProps } from "../interfaces";

const SidebarStyling: React.FC<IStylingItemProps> = (props) => {
    const { stateImmer, dispatchImmer, classNamesOfRotatingCard } = props;
    return (
        <RotateCard
            classnames={classNamesOfRotatingCard}
            backFaceOfCard={
                <Form.Control
                    className="w-75 mx-auto"
                    type="color"
                    name="sidebarColor"
                    value={stateImmer.colors.sideBarColor}
                    onChange={(event) => dispatchImmer({ type: 'updateSidebarColor', value: event.target.value })}
                    aria-label="select-color"
                />
            }
            frontFaceOfCard={
                <Form.Label className='ms-3'>Sidebar</Form.Label>
            }
        />
    )
};

export default SidebarStyling;