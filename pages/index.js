import Layout from '../components/PropsLayout'
import Link from 'next/link'

const extra = <span>Note: it will be ok</span>;

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Blog = () => (
  <Layout extra={extra}>
    <p>Blog</p>
    <ul>
      <PostLink title='Hello Next.js'></PostLink>
      <PostLink title='Learn Next.js is awesome'></PostLink>
      <PostLink title='Deploy apps with Zeit'></PostLink>
    </ul>
  </Layout>
)
export default Blog
