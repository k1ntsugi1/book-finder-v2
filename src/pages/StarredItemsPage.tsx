import { useTranslation } from "react-i18next";

import CardList from "../components/mainField/CardList";
import SpinnerOfLoading from "../components/SpinnerOfLoading";
import ErrorOfSearching from "../components/mainField/ErrorOfSearching";

import { useAppSelector } from "../store/hooks";

const StarredItemsPage: React.FC<{ typeOfItems: string }> = (props) => {

    const { typeOfItems } = props;
    const { t } = useTranslation();
    const { statusOfLoading, typeOfError } = useAppSelector(store => store.dataOfStarredItems);
    const message = typeOfError === 'network' 
        ? t("mainField.errorOfSearching.networkError")
        : t("mainField.errorOfSearching.unknownError");

    return (
        <>
            {statusOfLoading === 'fulfilled' && <CardList typeOfItems={typeOfItems} />}
            {statusOfLoading === 'pending' && <SpinnerOfLoading />}
            {statusOfLoading === 'rejected' && <ErrorOfSearching message={message}/>}
        </>
    )
};

export default StarredItemsPage;