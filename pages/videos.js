import Layout from '../components/PropsLayout'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

const Video = props => {
  const router = useRouter()

  return (
    <Layout>
      <h3>Video Cabin</h3>
      <h4>{props.video ? props.video.name : 'Sintel'}</h4>
      <section className="cabin">
        <video src="/v/12" controls></video>
        <video src="/static/est.mp4" controls></video>
      </section>
      <style jsx>{`
        .cabin {
          width: 300px;
          height: 220px;
          margin: 50px 0;
        }
        video {
          max-width: 100%;
          max-height: 100%;
        }
      `}
      </style>
    </Layout>
  )
}

// Video.getInitialProps = async function(context) {
//   const { id } = context.query
//   const res = await fetch(`/v/${id}`)
//   const video = await res.json()

//   console.log(`Fetched video: ${video.name}`)

//   return { video }
// }

export default Video