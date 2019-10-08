import Link from 'next/link'
import style from '../assets/style/switch.less'

const Index = () => (
  <div>
    <p>index</p>
    <label className={style.switch}>
      <input type="checkbox" />
      <div className={style.dot}></div>
    </label>
    <div>
      <Link href="/list">List</Link>
    </div>
  </div>
)
export default Index
