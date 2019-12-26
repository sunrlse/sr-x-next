import Header from './Header'
import '../assets/style/global.less'

const layoutStyle = {
  // margin: 0,
  // padding: 0,
  // background: '#f1f2f3'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    {/* <Header></Header> */}
    {/* <p>{props.extra}</p> 通过自定义属性传递的内容 */}
    {props.children}  {/* 直接拿到子标签 */}
    <div className="page-footer">
      <div className="beian">
        skyok.top All rights reserved. <a href="http://beian.miit.gov.cn" target="_blank">京ICP备19054053号-1</a>
      </div>
    </div>
    <style jsx>{`
      .page-footer {
        padding-bottom: 30px;
      }
      .beian {
        text-align: center;
      }
      .beian a {
        color: #000;
        text-decoration: none;
      }
      .beian a:hover {
        text-decoration: underline;
      }
    `}
    </style>
  </div>
)

export default Layout