import React from 'react'
import InfoPost from './InfoPost'

export default function FeaturedPost() {
  return (
    <article>
      <div className='flex -mx-4 lg:items-center items-start flex-wrap'>
          <div className='px-4 lg:w-8/12 md:w-7/12 w-full'> 
            <img src="/featured.png" className='rounded-xl w-full mb-4 md:mb-0'/>
          </div>          
          <div className='lg:w-4/12 md:w-5/12 w-full px-4'>
                <InfoPost 
                category="Kategori"
                date= "Tarih"
                title= "Başlık"
                shortDesc = "Kısa Açıklama"
                authorAvatar= "/author.png"
                authorName= "Yazar adı"
                authorJob= "Görevi"
                
                
                
                />
          </div>
          

      </div>

    </article>
  )
}
