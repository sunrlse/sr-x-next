import Link from 'next/link'
import style from '../assets/style/switch.less'

const List = () => (
  <div>
    <div>
      <Link href="/">index</Link>
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
  </div>
)

export default List