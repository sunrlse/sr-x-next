import Layout from '../../components/PropsLayout'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

const Post = props => {
  const router = useRouter()
  return (
    <Layout>
      <h3>{router.query.id}</h3>
      <h4>{props.show.name}</h4>
      <div className="markdown">
        <Markdown 
          source={`
This is our blog post.
Yes. We can have a [link](https://nextjs.org/docs/#with-link).
And we can have a title as well.
### This is a  title
And here's the content.

          `}
        />
        {/* markdown里面内容要顶格写，否则渲染出来是pre > code > text  */}
      </div>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img src={props.show.image.medium} alt={props.show.name}/>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }
        .markdown a {
          text-decoration: none;
          color: red;
        }
        .markdown a:hover {
          opacity: 0.6;
        }
        .markdown h3 {
          margin: 0;
          padding:0;
          text-transform: uppercase;
        }
      `}
      </style>
    </Layout>
  )
}

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post