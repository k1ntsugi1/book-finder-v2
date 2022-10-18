import { useState, MouseEvent, useRef } from 'react';
import { Card } from 'react-bootstrap';
import { ParsedItem } from '../../helpersFunc/parseResponseItems';
import GlassElement from '../GlassElement';
import { actionsDataOfStaredItems } from '../../store/dataOfStaredItemsSlice';
import { useAppDispatch } from '../../store/hooks';
import { useAppSelector } from '../../store/hooks';
import { actionsUiActiveElementsOfSidebar } from '../../store/uiActiveElementsOfSidebar';
import { actionsResultOfSearching } from '../../store/resultOfSearchingSlice';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

const CardOfItem: React.FC<{ item: ParsedItem }> = ({ item }) => {
    const { ids } = useAppSelector(store => store.dataOfStaredItems);
    const initialState = ids.includes(item.id) ? 'active' : 'inActive'
    const [activeStatus, setActiveStatus] = useState(initialState);
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();

    const refOfWrapper = useRef<HTMLDivElement>(null)

    const activeStatusHandler = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        const newStatus = activeStatus === 'active' ? 'inActive' : 'active';
        const action = activeStatus === 'active' ? 'removeItem' : 'addItem'
        appDispatch(actionsDataOfStaredItems[action]({ id: item.id }))
        setActiveStatus(newStatus);
    }
    return (
        <GlassElement
            key={item.id}
            hovering={true}
            classesOfContainer='border rounded'
            classesOfFrontFace='border rounded cursor-pointer'
            stylesOfContainer={{
                'background': 'var(--color-card)',
                'color': 'var(--color-text)',
                'width': '200px',
                'height': '200px',
            }}

        >
            <Card className="h-100 bg-transparent position-relative"
                onClick={() => {
                    appDispatch(actionsResultOfSearching.setActiveItem({ id: item.id }));
                    appDispatch(actionsUiActiveElementsOfSidebar.setActivePage({ page: 'item' }));
                    navigate('/item')
                }}
                // onMouseOver={() => {
                //     refOfWrapper.current!.style.visibility = 'visible'
                // }}
                // onMouseOut={() => {
                //     refOfWrapper.current!.style.visibility = 'hidden'
                // }}
            >
                <div className='mx-3 d-flex flex-noWrap justify-content-around'>
                    <Card.Img variant="top" src={item.imgUrl} className="mt-3 w-50 shadow-lg" alt="imgBook" style={{ width: '100px', height: '100px' }} />
                    <div className="mt-3 ms-auto inline-block position-relative">
                        <div className='cursor-pointer' onClick={activeStatusHandler}>
                            {activeStatus === 'inActive' &&
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill='currentColor' className="position absolute bi bi-star" viewBox="0 0 16 16">
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                            }
                            {activeStatus === 'active' &&
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            }
                        </div>
                    </div>

                </div>


                <Card.Body className="px-1 my-auto ">

                    <Card.Title className="text-center text-nowrap text-truncate">{item.name}</Card.Title>

                </Card.Body>
            </Card>
            <div
                className="position-absolute start-0 top-0 w-100 h-100"
                ref={refOfWrapper}
                style={{ 'background': 'rgba(147, 161, 255, 0.14)', 'visibility': 'hidden', 'zIndex': '1000' }}>
                <div className='centered-content'>
                    show-more
                </div>
            </div>

        </GlassElement>
    )
}

export default CardOfItem;