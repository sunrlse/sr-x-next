import Layout from '../components/PropsLayout'
import Link from 'next/link'
import style from '../assets/style/switch.less'

const List = () => (
  <Layout>
    <p>About</p>
    <div>
      <Link href="/"><a title="to index">Home</a></Link>
    </div>
    <section className="filter">
      <div className="filter-el">
        <label className={style.switch}>
          <input type="checkbox" />
          <div className={style.dot}></div>
        </label>
        <label className={style.switch}>
          <input type="checkbox" />
          <div className={style.dot}></div>
        </label>
      </div>
    </section>
    <section className="content"></section>
  </Layout>
)

export default List