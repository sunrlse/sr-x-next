import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/help">
      <a style={linkStyle}>Help</a>
    </Link>
    <Link href="/post">
      <a style={linkStyle}>Post</a>
    </Link>
    <Link href="/hoc">
      <a style={linkStyle}>HOC</a>
    </Link>
  </div>
)

export default Header