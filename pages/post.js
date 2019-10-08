import Layout from '../components/PropsLayout'
// import router from 'next/router'
import { useRouter } from 'next/router'
// console.log(router) // entire object


const Content = () => {
  const router = useRouter()
  return (
    <>
      <h3>{router.query.title}</h3>
      <p>This is the blog post content.</p>
    </>
  )
}

export default () => (
  <Layout>
    <Content />
  </Layout>
)

// export default () => {
//   const router = useRouter()
//   console.log(router)  // just normal useful object
//   return (
//     <Layout>
//       <h3>{router.query.title}</h3>
//       <p>This is the blog post content.</p>
//     </Layout>
//   )
// }