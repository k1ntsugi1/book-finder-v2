import Sidebar from './components/sidebar/SideBar';
import CardList from './components/mainField/CardList';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import GlassElement from './components/GlassElement';
import scrollHandler from './helpersFunc/scrollHandler';

const App: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const appDispatch = useAppDispatch();
  const { searchParams } = useAppSelector(store => store.dataOfSearching);
  
  useEffect(() => {
    const element = ref.current!;
    
    const scrollListener = () => {scrollHandler(element, appDispatch, searchParams)};

    element.addEventListener('scroll', scrollListener);
    return () => { element.removeEventListener('scroll', scrollListener) };

  }, [searchParams]);

  return (
    <GlassElement
      classesOfContainer='container-fluid h-100 overflow-hidden'
      classesOfFrontFace='m-0 h-100 row'
    >
      <Sidebar />
      <div 
        className='scroll-elem col py-3 h-100 d-flex justify-content-around flex-wrap gap-2 overflow-auto' ref={ref}
      >
        <CardList />
        <CardList />
      </div>
    </GlassElement>
  );
}

export default App;
