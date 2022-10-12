import Sidebar from './components/sidebar/SideBar';
import Card from './components/mainField/Card';


const App: React.FC = () => {


  return (
    <div className='container-fluid container-glass h-100 overflow-auto'>
      <div className="back-face-of-glass b-rad-10 "></div>
      <div className='h-100 row front-face-of-glass'>
        <div className='container-glass col-1'> 
          <Sidebar />
        </div>
        <div className='col'>
          {/* <Card /> */}
        </div>
      </div>
    </div>
    
  );
}

export default App;
