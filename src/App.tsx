import Sidebar from './components/sidebar/SideBar';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from './store/hooks';
import GlassElement from './components/GlassElement';
import scrollHandler from './helpersFunc/scrollHandler';

import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ResultOfSearchingPage from './pages/ResultOfSearchingPage';
import StaredItemsPage from './pages/StaredItemsPage';

const App: React.FC = () => {
  const [typeOfItems, setNewTypeOfItems] = useState<string>('default');

  const ref = useRef<HTMLDivElement>(null);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    const element = ref.current!;

    const scrollListener = () => { scrollHandler(element, appDispatch) };

    element.addEventListener('scroll', scrollListener);
    return () => { element.removeEventListener('scroll', scrollListener) };

  }, []);

  return (
    <GlassElement
      classesOfContainer='container-fluid h-100 overflow-hidden'
      classesOfFrontFace='m-0 h-100 row'
    >
      <Sidebar setNewTypeOfItems={setNewTypeOfItems} />
      <div
        className='scroll-elem col py-3 h-100 d-flex justify-content-around flex-wrap gap-2 overflow-auto' ref={ref}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/result" element={<ResultOfSearchingPage typeOfItems={typeOfItems}/>} />
          <Route path="/stared" element={<StaredItemsPage typeOfItems={typeOfItems}/>}></Route>
          {/* <Route path="*" element={<UndefinedPage />} /> */}
        </Routes>
      </div>
    </GlassElement>
  );
}

export default App;
