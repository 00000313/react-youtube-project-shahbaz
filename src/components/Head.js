import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';


const Head = () => {

  const dispatch = useDispatch();

      const toogleMenuHanlder = ()=>{
        dispatch(toggleMenu())
    }

  return (
  <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
        <div className='flex col-span-1'>
      <img
       onClick={()=>toogleMenuHanlder()}
       className='h-8 cursor-pointer'
       src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' 
       alt='menu'/>
      <img className='h-8 mx-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png' alt='youtube'/>
     </div>
     <div className='col-span-10  text-center px-15'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'/>
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-200'>🔍</button>
     </div>
     <div className='col-span-1'>
        <img
        className='h-8'
        alt='user-icon'
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        />
     </div>
    </div>
  )
}

export default Head;
