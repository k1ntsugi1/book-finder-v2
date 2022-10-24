import { useRef, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import { useAppDispatch } from '../../store/hooks';

import scrollHandler from '../../helpersFunc/scrollHandler';

import HomePage from '../../pages/HomePage';
import ResultOfSearchingPage from '../../pages/ResultOfSearchingPage';
import StarredItemsPage from '../../pages/StarredItemsPage';
import ViewableItemPage from '../../pages/ViewableItemPage';

import GlassElement from '../GlassElement';

const MainField: React.FC<{ typeOfItems: string }> = (props) => {

    const { typeOfItems } = props;

    const appDispatch = useAppDispatch();
    const refScrollElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollElement = refScrollElement.current!;

        const scrollListener = () => { scrollHandler(scrollElement, appDispatch) };

        scrollElement.addEventListener('scroll', scrollListener);

        return () => { scrollElement.removeEventListener('scroll', scrollListener) };
    }, []);

    return (
        <GlassElement className='col'>
            <div
                className='py-3 w-100 h-100 scroll-elem d-flex justify-content-around flex-wrap gap-2 overflow-auto'
                ref={refScrollElement}
            >
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/result" element={<ResultOfSearchingPage typeOfItems={typeOfItems} />} />
                    <Route path="/item" element={<ViewableItemPage />} />
                    <Route path="/stared" element={<StarredItemsPage typeOfItems={typeOfItems} />}></Route>
                    {/* <Route path="*" element={<UndefinedPage />} /> */}
                </Routes>
            </div>
        </GlassElement >
    )
};

export default MainField