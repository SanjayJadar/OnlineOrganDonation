import './App.css';
import {Route,Routes} from 'react-router-dom';
import AdminPage from './Components/AdminPage'; 
import UserPage from './Components/UserPage';
import LoginPage from './Components/Login';
import UserViewPost from './Components/UserViewPost';
import AdminViewPost from './Components/AdminViewPost';
import FormComponent from './Components/FormComponent';

function App() {
  return (
    <div className="App"> 
          <Routes>
             <Route exact path="/" element={<UserPage/>} />
             <Route exact path="/details" element={<UserViewPost/>} />
             <Route exact path="/request" element={<FormComponent/>} />
             <Route path="/login" element={<LoginPage/>} />
             <Route path="/admin" element={<AdminPage/>} /> 
             <Route path="/admin/details" element={<AdminViewPost/>} /> 
          </Routes>  
    </div>
  );
}

export default App;
