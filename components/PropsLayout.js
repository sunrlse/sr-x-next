import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header></Header>
    <p>{props.extra}</p> {/* 通过自定义属性传递的内容 */}
    {props.children}  {/* 直接拿到子标签 */}
  </div>
)

export default Layout