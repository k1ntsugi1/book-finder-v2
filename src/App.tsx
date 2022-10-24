import { useState } from 'react';
import { useAppSelector } from './store/hooks';

import SidebarField from './components/sidebarField/SidebarField';
import MainField from './components/mainField/MainField';
import Notification from './components/Notification'
import ColorRunner from './components/ColorRunner';

const App: React.FC = () => {

  const [typeOfItems, setNewTypeOfItems] = useState<string>('default');
  const { message, type, statusOfVisibility } = useAppSelector(store => store.uiNotificationSlice)

  return (
    <>
      <div className="p-0 container-fluid h-100 overflow-hidden">

        <div className='row h-100'>
          <SidebarField setNewTypeOfItems={setNewTypeOfItems} />
          <MainField typeOfItems={typeOfItems} />

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
