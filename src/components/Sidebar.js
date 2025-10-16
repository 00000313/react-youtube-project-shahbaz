import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((stote)=>stote.app.isMenuOpen);
    
  //Early retun pattern
  

  return !isMenuOpen ? null: (
    <div className='p-5 shadow-lg w-52'>
      
      <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
        <li>Short</li>
        <li>Subription</li>
        
      </ul>
      <h1 className='font-bold pt-3'>You</h1>
            <ul>
        <li>Histoy</li>
        <li>Playlist</li>
        <li>Your Vedios</li>
        <li>Watch Later</li>
        <li>Liked</li>
        <li>Downloads</li>
        
      </ul>
    </div>
  )
}

export default Sidebar;
