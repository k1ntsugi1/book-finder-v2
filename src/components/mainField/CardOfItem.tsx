import { MouseEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import GlassElement from '../GlassElement';

import { ParsedItem } from '../../utils/parseResponseItems';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { actionsDataOfStarredItems } from '../../store/slices/dataOfStarredItemsSlice';
import { actionsUiActiveSectionOfSidebar } from '../../store/slices/uiActiveSectionOfSidebarSlice';
import { actionsDataOfSearchedItems } from '../../store/slices/dataOfSearchedItemsSlice';
import { actionsUiNotification } from '../../store/slices/uiNotificationSlice';

import { ReactComponent as Star } from '../../assets/svg/star.svg'
import { ReactComponent as StarFill } from '../../assets/svg/star-fill.svg';


const CardOfItem: React.FC<{ item: ParsedItem }> = ({ item }) => {

    const { ids } = useAppSelector(store => store.dataOfStarredItems);
    const activeStatus = ids.includes(item.id) ? 'active' : 'unActive'

    const appDispatch = useAppDispatch();
    const navigate = useNavigate();
    const refOfWrapper = useRef<HTMLDivElement>(null)

    const activeStatusHandler = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        const newStatus = activeStatus === 'active' ? 'unActive' : 'active';
        const action = activeStatus === 'active' ? 'removeItem' : 'addItem'

        appDispatch(actionsDataOfStarredItems[action]({ id: item.id }));
        //appDispatch(actionsUiNotification.hide());

        newStatus === 'active'
            ? appDispatch(actionsUiNotification.show({ message: 'saved', type: 'success' }))
            : appDispatch(actionsUiNotification.show({ message: 'removed', type: 'success'}));
    };

    const moveToViewableItemHandler = () => {
        appDispatch(actionsDataOfSearchedItems.setActiveItem({ id: item.id }));
        appDispatch(actionsUiActiveSectionOfSidebar.setActivePage({ page: 'item' }));

        navigate('/item')
    };

    return (
        <GlassElement
            hovering={true}
            showingElement={refOfWrapper}
            className='color-text rounded'
            style={{
                'width': '200px',
                'height': '200px',
            }}

        >
            <Card className="h-100 position-relative bg-transparent ">
                <div className='mx-3 d-flex flex-noWrap justify-content-around'>

                    {
                        item.imgUrl &&
                        <Card.Img
                            variant="top"
                            src={item.imgUrl}
                            alt="imgBook"
                            className="mt-3 w-50 shadow-lg"
                            style={{ width: '100px', height: '100px' }}
                        />
                    }

                    <div className="mt-3 ms-auto inline-block position-relative">
                        <div className='cursor-pointer' onClick={activeStatusHandler}>
                            {
                                activeStatus === 'unActive'
                                    ? <Star width='20' height='20'/>
                                    : <StarFill width='20' height='20'/>
                            }
                        </div>
                    </div>

                </div>

                {
                    item.title &&
                    <Card.Body className="px-1 my-auto ">
                        <Card.Title className="text-center text-nowrap text-truncate">{item.title}</Card.Title>
                    </Card.Body>
                }

            </Card>
            <div
                className="cursor-pointer centered-content w-100 h-25 position-absolute start-0 top-50 translate-middle-y"
                ref={refOfWrapper}
                style={{ 'background': 'transparent', 'visibility': 'hidden', 'zIndex': '1000' }}
                onClick={moveToViewableItemHandler}
            >
                <div className='w-75 p-2 centered-content rounded fw-bold'
                    style={{ 'background': 'var(--color-sidebar)' }}>
                    show-more
                </div>
            </div>

        </GlassElement>
    )
}

export default CardOfItem;