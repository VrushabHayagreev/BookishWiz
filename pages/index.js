import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Categories, PostCard } from '../components'
import Postwidget from '../components/Postwidget'
const posts = [
  { title : 'Vrushab',excerpt: 'learn' },
  { title : 'Vrushab',excerpt: 'learn' },
]
export default function Home() {
  return (
    <div className="Container mxx-auto px-10 mb-8">
      <title>Bookishwiz </title>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
            {posts.map((post,index)=>(
              <PostCard post = {post} key = {post.title} />
            ))}
        </div>
      <div className='lg:col-span-4 col-span-1'>
        <div className='lg:sticky relative top-8'>
              <Postwidget/>
              <Categories/>
        </div>
    </div>
    </div>
    
    </div>
    
  )
}
