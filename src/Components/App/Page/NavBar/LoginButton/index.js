import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = () => {
  return (
    <div className='LoginButton'><Link to='/login'>Login</Link></div>
  )
}

export default LoginButton
