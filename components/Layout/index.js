import Header from '../Header'
import Footer from '../Footer'

const Layout = (props) => (
  <div>
    <Header/>
    <div>
      {props.children}
    </div>
    <Footer/>
  </div>
)

export default Layout
