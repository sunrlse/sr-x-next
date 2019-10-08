import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #f16'
}

const layout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header></Header>
      <Page></Page>
    </div>
  )
}

export default layout