import Navbar from './Components/Navbar'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Blog from './Pages/Blog';
import UserProfile from './Pages/UserProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatePost from './Pages/CreatePost';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import ChangePassword from './Pages/ChangePassword';
import { useEffect, useState } from 'react';
import UserContext from './Utils/UserContext';
import ProtectRoute from './ProtectRoute';
import EditPost from './Pages/EditPost';

function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(false)
  
  
  useEffect(()=>{
    if(localStorage.getItem("token") != null){
      setUser(true)
    }
    setLoading(false)
  }, [])

  if(loading) return
  return(
    <div className="h-screen bg-white">
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path='/blog/:id' element={<Blog/>}/>
            <Route path='/userprofile' element={<UserProfile/>}/>

            <Route path='/new' element={<ProtectRoute><CreatePost/></ProtectRoute>}/>
            <Route path='/dashboard' element={<ProtectRoute><Dashboard/></ProtectRoute>}/>
            <Route path='/profile' element={<ProtectRoute><Profile /></ProtectRoute>}/>
            <Route path='/change' element={<ProtectRoute><ChangePassword/></ProtectRoute>}/>
            <Route path='/edit/:id' element={<ProtectRoute><EditPost/></ProtectRoute>}/>
          </Routes>    
        </BrowserRouter>
      </UserContext.Provider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </div>
  )
}

export default App;
