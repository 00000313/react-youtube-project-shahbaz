import React from 'react'
import Buttons from './Buttons'

const buttonList = ["All" , "Gaming" , "Soccer" , "Live" ,"Gaming" ,"All" , "Gaming" , "Soccer" , "Live" ,"Gaming" , "All" , "Gaming" , "Soccer" , "Live" ,"Gaming"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {buttonList.map((item,index)=>(
         
        <Buttons key={index} name={item}></Buttons>

    ))}
    </div>
    
  )
}

export default ButtonList
