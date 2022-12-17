import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { resetSearch, selectSearch } from '../store/slices/search/search'

function HomeWrapper() {
  

  return (
    <div>
    <Navbar />
    <Outlet />
    </div>
  )
}

export default memo(HomeWrapper)