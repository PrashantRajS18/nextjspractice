import ArticleItem  from "../components/ArticleItem"
import articlestyles from '../styles/Article.module.css'

const Articles = ({ articles }) => {
  return (
    <>
    <div className={articlestyles.grid} >
      {articles.map((article) => (
        <ArticleItem  key={article.id} article={article} />
      ))}
    </div>
    </>
  )
}
export const getStaticProps = async ()=>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return{
    props :{
      articles
    }
  }
}

export default Articles