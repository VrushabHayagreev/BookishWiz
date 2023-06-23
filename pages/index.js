import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Categories, PostCard } from '../components'
import Postwidget from '../components/Postwidget'
import { getPosts } from '../services'

export default function Home({posts}) {
  return (
    <div className="Container mxx-auto px-10 mb-8">
      <title>Bookishwiz </title>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
            {posts.map((post)=>(
              <PostCard post = {post.node} key = {post.title} />
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

export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return{
    props:{posts}
  }
}