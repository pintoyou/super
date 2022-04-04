import React from 'react'
import InfoPost from '@/components/InfoPost'

export default function Card({ thumbnail, ...infoPost}) {
  return (
    <article>
        <img src={thumbnail} className='w-full rounded' />
        <InfoPost 
            {...infoPost}       
        
        />
    </article>
  )
}
