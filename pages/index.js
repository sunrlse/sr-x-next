import Layout from '../components/PropsLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'

const extra = <span>Note: it will be ok</span>;

const posts = [
  { id: 'hel', title: 'hello' },
  { id: 'lea', title: 'learn' },
  { id: 'dep', title: 'deploy' }
]

const PostLink = ({ item }) => (
  <li style={{listStyle: 'bengali inside'}}>
    <Link href={`/post?title=${item.title}`}> 
      <a>{item.title}</a>
    </Link>
  </li>
)

const Blog = props => {
  const router = useRouter()

  function search(e) {
    console.log(e.target.value)
    let kw = e.target.value;
    if (kw === 'video') {
      router.push('/videos')
    }
  }

  return (
    <Layout extra={extra}>
      <div>
        <input placeholder="input dest" onBlur={search}/>
      </div>
      <p>Blog</p>
      <ul>
        {
          posts.map((item, index) => (
            <PostLink item={item} key={index}/>
            // <li key={index}>
            //   <Link href="/p/[id]" as={`/p/${item.id}`}> 
            //     <a>{item.title}</a>
            //   </Link>
            // </li>
            // !  style jsx 不会作用到 嵌套的子组件 PostLink 中
          ))
        }
      </ul>
      <style jsx>{`
        h3,
        a {
          font-family: 'Arial';
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none !important;
          margin: 5px 0;
        }
        a {
          text-decoration: none;
          color: blue;
        }
        a:hover {
          opacity: 0.6;
        }
      `}</style>
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
}

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
