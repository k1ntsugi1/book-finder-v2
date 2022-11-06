import cn from 'classnames';

import GlassElement from "../GlassElement";
import RunnerElement from "../RunnerElement";

import { ReactComponent as GitHub } from '../../assets/svg/github.svg';
import { ReactComponent as Telegram } from '../../assets/svg/telegram.svg';
import { ReactComponent as Envelop } from '../../assets/svg/envelope-fill.svg';
import { ReactComponent as ArrowUpRight } from '../../assets/svg/arrow-up-right.svg';


const LinksOfContactsCard: React.FC = () => {

    const openLinkHandler = (link: string) => {
        window.open(link);
    }

    const className = cn('border-bottom flex-grow-1 rounded-top')

    return (
        <GlassElement className="links-contacts-container w-50 h-75 d-flex flex-column rounded">

            <RunnerElement
                className={className}
                onClickHandler={() => openLinkHandler('https://github.com/k1ntsugi1')}
            >
                <GitHub width="50" height="50" />
                <ArrowUpRight width="50" height="50" />
            </RunnerElement>

            <RunnerElement
                className={className}
                onClickHandler={() => openLinkHandler('https://t.me/bmasalimov')}
            >
                <Telegram width="50" height="50" />
                <ArrowUpRight width="50" height="50" />
            </RunnerElement>

            <RunnerElement
                className={className}
            >
                <Envelop width="50" height="50" />
                <span>bmasalimov5@yandex.ru</span>
            </RunnerElement>

        </GlassElement>

    )
};

export default LinksOfContactsCard;