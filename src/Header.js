import React from 'react'
import useWindowSize from './Hooks/useWindowSize'
import { FaLaptop, FaMobileAlt, FaTabletAlt } from "react-icons/fa";

const Header = () => {
  const {width} = useWindowSize();
  return (
    <header>
      <h1>VConnect</h1>
      {width < 760 ? <FaMobileAlt/> : width < 992 ? <FaTabletAlt/> : <FaLaptop/>}
    </header>
  )
}

export default Header