import CardList from "../components/mainField/CardList";
import Spinner from "../components/mainField/Spinner";

import { useAppSelector } from "../store/hooks";

const StaredItemsPage: React.FC<{ typeOfItems: string }> = (props) => {
    const { typeOfItems } = props;
    const { statusOfLoading } = useAppSelector(store => store.dataOfStaredItems);
    return (
        <>
            {statusOfLoading === 'fulfilled' && <CardList typeOfItems={typeOfItems} />}
            {statusOfLoading === 'pending' && <Spinner />}
        </>
    )
};

export default StaredItemsPage;