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
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/userprofile' element={<UserProfile/>}/>

            <Route path='/new' element={<CreatePost/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/change' element={<ChangePassword/>}/>
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
