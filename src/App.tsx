import Sidebar from './components/sidebar/SideBar';
import Card from './components/mainField/Card';
import cn from 'classnames'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const App: React.FC = () => {

  const [showStateOfSidebar, setNewShowStateOfSidebar] = useState('visible');
  const classnamesOfSidebarContainer = cn('container-glass', {
      'col-3': showStateOfSidebar === 'visible' ? true : false,
      'col-1': showStateOfSidebar === 'visible' ? false : true
    });

  return (
    <div className='container-fluid container-glass h-100 overflow-auto'>
      <div className="back-face-of-glass b-rad-10 "></div>
      <div className='h-100 row front-face-of-glass'>
        <div className={classnamesOfSidebarContainer}> 
          <Sidebar 
            showStateOfSidebar={showStateOfSidebar} 
            setNewShowStateOfSidebar={setNewShowStateOfSidebar}/>
        </div>
        <div className='col'>
          {/* <Card /> */}
        </div>
      </div>
    </div>
    
  );
}

export default App;
