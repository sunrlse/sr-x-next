import Layout from '../components/PropsLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const extra = <span>Note: it will be ok</span>;

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}> 
      {/* 直接给href 完整的会走刷新跳转 */}
      <a>{props.id}</a>
    </Link>
  </li>
)

const Blog = props => (
  <Layout extra={extra}>
    <p>Blog</p>
    <ul>
      <PostLink id="hello-nextjs"></PostLink>
      <PostLink id="learn-nextjs"></PostLink>
      <PostLink id="deploy-nextjs"></PostLink>
    </ul>
    <h3>Batman TV Shows</h3>
    <ul>
      {props.tvShows.map((show, index) => (
        <li key={index}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Blog.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  console.log(`Show data fetched. Count: ${data.length}`)
  // 在index页面刷新浏览器( 在其它页面时手动输入index 跳转等同)，只会在server端打印 
  // 若是 在其它页面刷新或者不刷新，然后前端路由跳转到index，则只会在浏览器console打印

  return {
    tvShows: data.map(entry => entry.show)
  }
}


export default Blog
