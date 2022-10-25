import CardList from "../components/mainField/CardList";
import SpinnerOfLoading from "../components/SpinnerOfLoading";

import { useAppSelector } from "../store/hooks";

const StarredItemsPage: React.FC<{ typeOfItems: string }> = (props) => {
    const { typeOfItems } = props;
    const { statusOfLoading } = useAppSelector(store => store.dataOfStarredItems);
    return (
        <>
            {statusOfLoading === 'fulfilled' && <CardList typeOfItems={typeOfItems} />}
            {statusOfLoading === 'pending' && <SpinnerOfLoading />}
        </>
    )
};

export default StarredItemsPage;