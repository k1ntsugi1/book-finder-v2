import { memo } from 'react';
import { useTranslation } from "react-i18next";

import SpinnerOfLoading from "../components/SpinnerOfLoading";
import Loader from "../components/mainField/Loader";
import CardList from "../components/mainField/CardList";
import ErrorOfSearching from '../components/mainField/ErrorOfSearching';

import { useAppSelector } from "../store/hooks";

const ResultOfSearchingPage: React.FC<{ typeOfItems: string }> = (props) => {
    const { typeOfItems } = props;
    const { range: { maxResults }, statusOfLoading, typeOfError } = useAppSelector(store => store.dataOfSearchedItems);
    const { totalItems } = useAppSelector(store => store.dataOfSearchedItems);
    const { t } = useTranslation();

    const message = typeOfError === 'network' 
    ? t("mainField.errorOfSearching.networkError")
    : t("mainField.errorOfSearching.unknownError");
    

    return (
        <>
            {statusOfLoading === 'fulfilled' && <CardList typeOfItems={typeOfItems} />}
            {(statusOfLoading === 'fulfilled') && (totalItems > maxResults) && <Loader />}
            {statusOfLoading === 'pending' && <SpinnerOfLoading />}
            {statusOfLoading === 'rejected' && <ErrorOfSearching message={message}/>}
        </>
    );
};

export default memo(ResultOfSearchingPage);