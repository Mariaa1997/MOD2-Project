import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <div className='nav'>
        <Link to="/">
            <div>Characters</div>
        </Link>
        <Link to="/episodes">
            <div>Episodes</div>
        </Link>
        <Link to="/locations">
            <div>Locations</div>
        </Link>
    </div>
  )
}

export default Nav