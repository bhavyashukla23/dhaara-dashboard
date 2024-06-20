import './App.css';
import SideBar from './Components/Sidebar';
import NavBar from './Components/NavBar';
import DashBoard from './Components/DashBoard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='row2'>
      <SideBar/>
      <DashBoard/>
      </div>
     
    </div>
  );
}

export default App;
