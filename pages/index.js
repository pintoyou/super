import { useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '@/components/Navbar'
import FeaturedPost from '@/components/FeaturedPost'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Container from '@/components/Container'


export default function Home() {
  const [post, setPost] = useState ([
    {
      id: 1,
      thumbnail: '/featured.png',
      category: 'internet',
      date: '5 temmuz',
      title: 'başlık',
      shortDesc: 'kısa açıklama',
      authorName: 'yazar adı',
      authorJob: 'yazar',
      authorAvatar: '/author.png'
  },
  {
    id: 2,
    thumbnail: '/featured.png',
    category: 'internet',
    date: '5 temmuz',
    title: 'başlık',
    shortDesc: 'kısa açıklama',
    authorName: 'yazar adı',
    authorJob: 'yazar',
    authorAvatar: '/author.png'
},
{
  id:3,
  thumbnail: '/featured.png',
  category: 'internet',
  date: '5 temmuz',
  title: 'başlık',
  shortDesc: 'kısa açıklama',
  authorName: 'yazar adı',
  authorJob: 'yazar',
  authorAvatar: '/author.png'
},
{
id: 4,
thumbnail: '/featured.png',
category: 'internet',
date: '5 temmuz',
title: 'başlık',
shortDesc: 'kısa açıklama',
authorName: 'yazar adı',
authorJob: 'yazar',
authorAvatar: '/author.png'
}, 
{
  id: 5,
  thumbnail: '/featured.png',
  category: 'internet',
  date: '5 temmuz',
  title: 'başlık',
  shortDesc: 'kısa açıklama',
  authorName: 'yazar adı',
  authorJob: 'yazar',
  authorAvatar: '/author.png'
},
{
id: 6,
thumbnail: '/featured.png',
category: 'internet',
date: '5 temmuz',
title: 'başlık',
shortDesc: 'kısa açıklama',
authorName: 'yazar adı',
authorJob: 'yazar',
authorAvatar: '/author.png'
}
  ]);
  return (
    <div className='bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white'>
         
        <Navbar/>
        <Container>

        
        <FeaturedPost />
        <div className='flex -mx-4 flex-wrap'>
          {post.map(post => (

          
          <div key={post.id} className='md:w-4/12 w-full px-4 py-6 mt-6'>
            <Card {...post}/>
          </div>
          ))}
        </div>
        </Container>
        


            <Footer />

    </div>
  )
}
