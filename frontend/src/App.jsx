
import './App.css';
import {Routes,Route} from 'react-router-dom'
import AddContact from './Components/AddContact/AddContact';
import Home from './Components/Home/Home';
import ListContact from './Components/ListContact/ListContact';
import NavContact from './Components/NavContact/NavContact';
import UpdateContact from './Components/UpdateContact/UpdateContact';
function App() {
    return ( 
        <div className = "App" >
        <NavContact/>
        <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/list' element={ <ListContact/>} />
        <Route path='/add' element={<AddContact/>} />
        <Route path='/update/:id' element={ <UpdateContact/>}/>
    </Routes>
        </div>
    );
}

export default App;