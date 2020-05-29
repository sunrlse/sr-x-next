import Layout from '../components/PropsLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import Markdown from 'react-markdown'
import '../assets/style/sun.less'

const extra = <span>Note: it will be ok</span>;

const posts = [
  // { id: 'hel', title: 'hello' },
  // { id: 'lea', title: 'learn' },
  // { id: 'dep', title: 'deploy' }
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

  async function search(e) {
    console.log(e.target.value)
    let kw = e.target.value;
    if (kw === 'video') {
      router.push('/videos')
      // const res = await fetch('/v/12')
      // console.log('---client---')
      // console.log(res)
      // console.log('---client---')
    }
  }

  function wechat() {
    // var qs = 'signature=5348f3f213b0a04e85da45662cb356b9ccc74618&nonce=abc123&timestamp=1590772649878&echostr=thankyou'
    // var xhr = new XMLHttpRequest()
    // xhr.open('get', `/api/wechat/check?${qs}`)
    // xhr.onreadystatechange = function(res) {
    //     if (xhr.readyState==4 &&xhr.status==200) {
    //         console.log(xhr.responseText)
    //     }
    // }
    // xhr.send()
  }

  return (
    <Layout extra={extra}>
      <div className="ban">
        <div className="sun">
          <div className="face">
            <div className="pupil-left"></div>
            <div className="pupil-right"></div>
            <div className="smile"></div>
          </div>
          <div className="ray">
            <div className="beam r1"></div>
            <div className="beam r2"></div>
            <div className="beam r3"></div>
            <div className="beam r4"></div>
            <div className="beam r5"></div>
            <div className="beam r6"></div>
            <div className="beam r7"></div>
            <div className="beam r8"></div>
            <div className="beam r9"></div>
            <div className="beam r10"></div>
          </div>
        </div>
        <div className="cloud">
          <div className="cloud-left"></div>
          <div className="cloud-right"></div>
          <div className="cloud-bottom"></div>
          {/* <div className="eye-left"><div className="pupil"></div></div> */}
          {/* <div className="eye-right"><div className="pupil"></div></div> */}
          {/* <div className="mouth"></div> */}
          {/* <div className="tear-left"></div>
          <div className="tear-right"></div> */}
        </div>
        <div className="cloud cloud-2" onClick={wechat}>
          <div className="cloud-left"></div>
          <div className="cloud-right"></div>
          <div className="cloud-bottom"></div>
        </div>
      </div>
      <div className="markdown">
        <Markdown 
          source={`
- - -
title: 赤壁赋
tags: 摘
date: 2019-12-26 13:30:05
- - -
#
  &nbsp;
  #

&emsp;&emsp;壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙。  
&nbsp;   
&emsp;&emsp;于是饮酒乐甚，扣舷而歌之。歌曰：“桂棹兮兰桨，击空明兮溯流光。渺渺兮予怀，望美人兮天一方。”客有吹洞箫者，倚歌而和之。其声呜呜然，如怨如慕，如泣如诉，余音袅袅，不绝如缕。舞幽壑之潜蛟，泣孤舟之嫠妇。  
&nbsp;  
&emsp;&emsp;苏子愀然，正襟危坐而问客曰：“何为其然也？”客曰：“月明星稀，乌鹊南飞，此非曹孟德之诗乎？西望夏口，东望武昌，山川相缪，郁乎苍苍，此非孟德之困于周郎者乎？方其破荆州，下江陵，顺流而东也，舳舻千里，旌旗蔽空，酾酒临江，横槊赋诗，固一世之雄也，而今安在哉？况吾与子渔樵于江渚之上，侣鱼虾而友麋鹿，驾一叶之扁舟，举匏樽以相属。寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷。挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风。”  
&nbsp;  
&emsp;&emsp;苏子曰：“客亦知夫水与月乎？逝者如斯，而未尝往也；盈虚者如彼，而卒莫消长也。盖将自其变者而观之，则天地曾不能以一瞬；自其不变者而观之，则物与我皆无尽也，而又何羡乎!且夫天地之间，物各有主,苟非吾之所有，虽一毫而莫取。惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色，取之无禁，用之不竭，是造物者之无尽藏也，而吾与子之所共适。”  
&nbsp;  
&emsp;&emsp;客喜而笑，洗盏更酌。肴核既尽，杯盘狼籍。相与枕藉乎舟中，不知东方之既白。

          `}
        />
      </div>
      {/* <div>
        <input placeholder="input dest" onBlur={search}/>
      </div> */}
      {/* <p>Blog</p> */}
      {/* <ul>
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
      </ul> */}
      <style jsx>{`
        h3,
        a {
          font-family: 'Arial';
        }
        .ban {
          position: relative;
          height: 400px;
          background: linear-gradient(180deg, #3671ef, #f1f2f3);
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
        .markdown {
          position: relative;
          top: -50px;
          width: 50%;
          margin: 0 auto;
          font-weight: 300;
          color: #232323;
        }
      `}</style>
      {/* <h3>Batman TV Shows</h3> */}
      {/* <ul>
        {props.tvShows.map((show, index) => (
          <li key={index}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul> */}
    </Layout>
  )
}

// Blog.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()
//   console.log(`Show data fetched. Count: ${data.length}`)
//   // 在index页面刷新浏览器( 在其它页面时手动输入index 跳转等同)，只会在server端打印 
//   // 若是 在其它页面刷新或者不刷新，然后前端路由跳转到index，则只会在浏览器console打印

//   return {
//     tvShows: data.map(entry => entry.show)
//   }
// }


export default Blog
