import Link from 'next/link'

const headerStyle = {
  height: 50,
  paddingLeft: 20,
  display: "flex",
  alignItems: "center",
  background: "linear-gradient(45deg, #fddd66, transparent)"
}
const linkStyle = {
  marginRight: 15,
  color: "#0a3"
}

const Header = () => (
  <div style={headerStyle}>
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