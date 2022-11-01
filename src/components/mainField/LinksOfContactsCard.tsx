import cn from 'classnames';

import GlassElement from "../GlassElement";
import RunnerElement from "../RunnerElement";

import GitHubSVGElement from "../SVGElements/GitHubSVGElement";
import TelegramSVGElement from "../SVGElements/TelegramSVGElement";
import MailSVGElement from "../SVGElements/MailSVGElement";
import ArrowUpRightSVGElement from "../SVGElements/ArrowUpRightSVGElement";

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
                <>
                    <GitHubSVGElement width="50" height="50" />
                    <ArrowUpRightSVGElement width="50" height="50" />
                </>
            </RunnerElement>

            <RunnerElement
                className={className}
                onClickHandler={() => openLinkHandler('https://t.me/bmasalimov')}
            >
                <>
                    <TelegramSVGElement width="50" height="50" />
                    <ArrowUpRightSVGElement width="50" height="50" />
                </>
            </RunnerElement>

            <RunnerElement
               className={className}
            >
                <>
                    <MailSVGElement width="50" height="50" />
                    <span>bmasalimov5@yandex.ru</span>
                </>
            </RunnerElement>

        </GlassElement>

    )
};

export default LinksOfContactsCard;