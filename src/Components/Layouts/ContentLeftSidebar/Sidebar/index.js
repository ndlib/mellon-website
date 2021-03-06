import React from 'react'
import { PropTypes } from 'prop-types'

const Sidebar = ({ title, children }) => {
  return (
    <aside className='sideBar'>
      { title ? <h2>{title}</h2> : null }
      {children}
    </aside>
  )
}
Sidebar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}
export default Sidebar
