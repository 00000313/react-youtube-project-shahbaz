import React from 'react'

const VedioCard = ({info}) => {
    console.log(info)
    const { snippet , statistics } = info;
    const {channelTitle , title , thumbnails} = snippet;
  return (
    <div className='p-2 m-3 w-64 shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail'/>
        <ul>
            <li className='font-bold p-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VedioCard
