import Layout from '../components/PropsLayout'
import Link from 'next/link'
// import style from '../assets/style/switch.less'
// import '../assets/style/switch.less'


export default function () {
  return (
    <Layout>
      <p>About</p>
      <div>
        <Link href="/index"><a>Home</a></Link>
      </div>
      <section className="filter">
        <div className="filter-el">
          <label className="switch">
            <input type="checkbox" />
            <div className="dot"></div>
          </label>
          <label className="switch">
            <input type="checkbox" />
            <div className="dot"></div>
          </label>
          {/* <label className={style.switch}>
            <input type="checkbox" />
            <div className={style.dot}></div>
          </label>
          <label className={style.switch}>
            <input type="checkbox" />
            <div className={style.dot}></div>
          </label> */}
        </div>
      </section>
      <section className="content"></section>
    </Layout>
  )
}
