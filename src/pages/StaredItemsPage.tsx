import Spinner from "../components/mainField/Spinner";
import { useAppSelector } from "../store/hooks";
import CardList from "../components/mainField/CardList";

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