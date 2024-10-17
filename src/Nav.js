import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './Context/DataContext'

const Nav = () => {
  const {search,setSearch,handleSearch} = useContext(DataContext)
  return (
    <nav>
      <form className='searchform' onSubmit={(e)=> handleSearch(e)}> 
        <input id="search" type='text' required  placeholder='search posts' value={search} onChange={(e)=> setSearch(e.target.value)}/>
      </form>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/post">Posts</Link></li>
        <li><Link to = "/about">About</Link></li>
    </nav>
  )
}

export default Nav