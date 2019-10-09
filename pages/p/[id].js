import Layout from '../../components/PropsLayout'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'


const Post = props => {
  const router = useRouter()
  return (
    <Layout>
      <h3>{router.query.id}</h3>
      <h4>{props.show.name}</h4>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img src={props.show.image.medium} alt={props.show.name}/>
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