import Sidebar from './components/sidebar/SideBar';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import GlassElement from './components/GlassElement';
import scrollHandler from './helpersFunc/scrollHandler';

import ListSeciton from './components/mainField/ListSection';

const App: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const appDispatch = useAppDispatch();
  const { range: { startIndex }} = useAppSelector(store => store.dataOfSearching);
  const { totalItems } = useAppSelector(store => store.resultOfSearching);
  
  useEffect(() => {
    const element = ref.current!;
    
    const scrollListener = () => {scrollHandler(element, appDispatch)};

    element.addEventListener('scroll', scrollListener);
    return () => { element.removeEventListener('scroll', scrollListener) };

  }, []);

  return (
    <GlassElement
      classesOfContainer='container-fluid h-100 overflow-hidden'
      classesOfFrontFace='m-0 h-100 row'
    >
      <Sidebar />
      <div 
        className='scroll-elem col py-3 h-100 d-flex justify-content-around flex-wrap gap-2 overflow-auto' ref={ref}
      >
        {totalItems !== 0 && <ListSeciton />}
      </div>
    </GlassElement>
  );
}

export default App;
