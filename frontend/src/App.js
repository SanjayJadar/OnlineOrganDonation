import './App.css';
import {Route,Routes} from 'react-router-dom';
import AdminPage from './Components/AdminPage';
import AdminView from './Components/adminView'; 
import Header from './Components/header';
import Posts from './Components/post'; 
import PostDetails from './Components/postDetail'; 
import UserPage from './Components/UserPage';
import LoginPage from './Components/Login';

function App() {
  return (
    <div className="App">
      <LoginPage/>
          {/* <Routes>
             <Route exact path="/" element={<UserPage/>} />
             <Route path="/login" element={<LoginPage/>} />
             <Route path="/admin" element={<AdminPage/>} /> 
          </Routes>  */}
      {/* <PostDetails/> */}
      {/* <AdminView/> */}
      {/* <AdminPage/> */}
    </div>
  );
}

export default App;
