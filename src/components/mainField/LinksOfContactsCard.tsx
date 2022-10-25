import GlassElement from "../GlassElement";

import GitHubSVGElement from "../SVGElements/GitHubSVGElement";
import TelegramSVGElement from "../SVGElements/TelegramSVGElement";
import MailSVGElement from "../SVGElements/MailSVGElement";
import ArrowUpRightSVGElement from "../SVGElements/ArrowUpRightSVGElement";
const LinksOfContactsCard: React.FC = () => {

    const openLinkHandler = (link: string) => {
        window.open(link);
    }

    return (
        <GlassElement className="w-50 h-75 d-flex flex-column rounded">
           
            <div className='container-element-runner border-bottom flex-grow-1 rounded-top'>
                <div className='element-runner front-element-runner'>
                    <GitHubSVGElement width="50" height="50" />
                </div>
                <div className="element-runner back-element-runner" onClick={() => openLinkHandler('https://github.com/k1ntsugi1')}>
                    <ArrowUpRightSVGElement width="50" height="50" />
                </div>
            </div>

            <div className='container-element-runner border-bottom flex-grow-1 '>
                <div className="element-runner front-element-runner">
                    <TelegramSVGElement width="50" height="50" />
                </div>
                <div className="element-runner back-element-runner" onClick={() => openLinkHandler('https://t.me/bmasalimov')}>
                    <ArrowUpRightSVGElement width="50" height="50" />
                </div>
            </div>
            
            <div className="container-element-runner border-bottom flex-grow-1 rounded-bottom">
                <div className="element-runner front-element-runner">
                    <MailSVGElement width="50" height="50" />
                </div>
                <div className="element-runner back-element-runner">
                    <span>bmasalimov5@yandex.ru</span>
                </div>
            
            </div>
        </GlassElement>

    )
};

export default LinksOfContactsCard;