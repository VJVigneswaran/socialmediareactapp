import React from 'react'

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <p>CopyRight@Vigneswaran in {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer