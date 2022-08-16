import Link from 'next/link'
import articlestyles from '../styles/Article.module.css'
export default function Home({articles}) {
  // console.log(articles);
  return (
    <>
      <h1>Hello Welcome to Next js Practice </h1>
      <h4 className={articlestyles.brown}>To see the articles which are fetched from api click below</h4>
      <p>&darr;</p>
      <Link href="/articles" >Articles Section</Link>
    </>
  )
}
