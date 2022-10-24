import { memo } from 'react';

import SpinnerOfLoading from "../components/SpinnerOfLoading";
import Loader from "../components/mainField/Loader";
import CardList from "../components/mainField/CardList";

import { useAppSelector } from "../store/hooks";

const ResultOfSearchingPage: React.FC<{ typeOfItems: string }> = (props) => {
    const { typeOfItems } = props;
    const { range: { maxResults }, statusOfLoading } = useAppSelector(store => store.dataOfSearching);
    const { totalItems } = useAppSelector(store => store.resultOfSearching);
    return (
        <>
            {statusOfLoading === 'fulfilled' && <CardList typeOfItems={typeOfItems} />}
            
            {statusOfLoading === 'pending' && <SpinnerOfLoading />}
            {(totalItems > maxResults) && <Loader />}
        </>
    );
};

export default memo(ResultOfSearchingPage);