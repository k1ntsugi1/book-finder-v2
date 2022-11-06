

import SmallInformationCard from "../SmallInformationCard";

import { ReactComponent as EmojiFrown } from '../../assets/svg/emoji-frown.svg';

const ErrorOfSearching: React.FC<{message: string}> = ({message}) => {
    return (
        <SmallInformationCard className="border-danger shadow-danger" message={message}>
            <EmojiFrown width="25" height ="25"/>
        </SmallInformationCard>
    )
};

export default ErrorOfSearching;