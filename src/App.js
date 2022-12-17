import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import CreatePost from './components/CreatePost/CreatePost';
import Explore from './components/Explore/Explore';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Messenger from './components/Messenger/Messenger';
import Notifications from './components/Notifications/Notifications';
import Profile from './components/Profile/Profile';
import UniqItem from './components/UniqItem/UniqItem';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomeWrapper from './pages/HomeWrapper';
import { resetSearch } from './store/slices/search/search';
import { selectUsers } from './store/slices/users/usersSlice';

function App() {
  const {currentUser} = useSelector(selectUsers)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
    }
  },[currentUser])

  useEffect(() => {
    dispatch(resetSearch())
    window.scrollTo(0,0)
  },[navigate])

  

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<HomeWrapper />} >
            <Route index element={<Main/>}/>
            <Route path=':id/uniq' element={<UniqItem />} />
            <Route path='messenger' element={<Messenger />} />
            <Route path='notification' element={<Notifications />} />
            <Route path='explore' element={<Explore />} />
            <Route path='profile' element={<Profile />} />
            <Route path='create' element={<CreatePost />} />
            <Route path='*' element={<ErrorPage />}/>
          </Route>
          <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
