import './App.css';
import {Route,Routes} from 'react-router-dom';  
import AdminMainPage from './Components/AdminComponents/AdminMainPage';
import UserMainPage from './Components/UserComponents/UserMainPage'; 
import LoginPage from './Components/AdminComponents/LoginPage';
import PostDetails from './Components/CommonComponents/PostDetails';
import FormComponent from './Components/UserComponents/FormComponent';

function App() {
  return (
    <div className="App"> 
          <Routes>
             <Route exact path="/" element={<UserMainPage/>} />
             <Route exact path="/login" element={<LoginPage/>} />
             <Route exact path="/admin" element={<AdminMainPage/>} />  
             <Route exact path="/details" element={<PostDetails/>} />  
             <Route exact path="/request" element={<FormComponent/>} />  
          </Routes>  
    </div>
  );
}

export default App;
