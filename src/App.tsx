import Sidebar from './components/sidebar/SideBar';
import CardList from './components/mainField/CardList';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import fetchDataAsyncThunk from './store/fetchDataAsyncThunk';
import { actionsUiValueOfScroll } from './store/uiValueOfScrollSlice';

const App: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const appDispatch = useAppDispatch();
  const { searchParams } = useAppSelector(store => store.dataOfSearching);

  useEffect(() => {
    const element = ref.current!;
    const scrollHandler = () => {
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = element.scrollHeight;
      const scrollTop = element.scrollTop + element.clientHeight;
      console.log(clientHeight, scrollHeight, scrollTop)
      appDispatch(actionsUiValueOfScroll.updateHeight({heightOfColumn: ((scrollTop -clientHeight)/(scrollHeight - clientHeight)) * 100}))
      if (scrollHeight - scrollTop < 20) {
        appDispatch(fetchDataAsyncThunk(searchParams));
      }
    };
    element.addEventListener('scroll', scrollHandler);
    return () => { element.removeEventListener('scroll', scrollHandler) };

  }, [searchParams]);

  return (
    <div className='container-fluid container-glass h-100 overflow-hidden'>
      <div className="back-face-of-glass b-rad-10 "></div>
      <div className='m-0 h-100 row front-face-of-glass'>
        <div className='container-glass col-1' style={{ 'zIndex': '1000' }}>
          <Sidebar />
        </div>
        <div className='col py-3 h-100 d-flex justify-content-around flex-wrap gap-2 overflow-auto' ref={ref}>
            <CardList />
            <CardList />
        </div>
      </div>
    </div>

  );
}

export default App;
