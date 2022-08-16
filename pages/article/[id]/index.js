import Link from 'next/link'
// import {useRouter} from  'next/router'

function article({article}) {
  return (
    <>
    <h1>This is Article {article.id}</h1>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Link href='/' >Home Page</Link>
    </>
  )
}


export const getServerSideProps = async (context)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return{
        props : {
            article
        }
    }


}

export default article