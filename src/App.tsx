import { useState } from 'react';
import { useAppSelector } from './store/hooks';
import { ToastContainer } from 'react-toastify';

import SidebarToggler from './components/sidebarField/sidebarToggler/SidebarToggler';
import SidebarField from './components/sidebarField/SidebarField';
import MainField from './components/mainField/MainField';
import Notification from './components/Notification'
import ColorRunner from './components/RotatingCircles';

const App: React.FC = () => {

  const [ showStateOfSidebar, setShowStateOfSidebar ] = useState<string>('show')
  const [typeOfItems, setNewTypeOfItems] = useState<string>('default');
  const { message, type, statusOfVisibility } = useAppSelector(store => store.uiNotificationSlice)

  return (
    <>
      <div className="container-fluid p-0 h-100 overflow-hidden">

        <div className='row h-100'>
          <SidebarToggler showStateOfSidebar={showStateOfSidebar} setShowStateOfSidebar={setShowStateOfSidebar}/>
          <SidebarField showStateOfSidebar={showStateOfSidebar} setNewTypeOfItems={setNewTypeOfItems} />
          <MainField typeOfItems={typeOfItems} />
          <ToastContainer />
        </div>

      </div>
      
      <ColorRunner />
      <Notification
          message={message}
          type={type}
          visibilityStatus={statusOfVisibility}
      />

    </>
  );
}

export default App;
