import React from 'react'
import { HashRouter } from 'react-router-dom'
import Messages from '../common/template/message'
import Header from '../common/template/header'
import Navbar from '../common/template/navbar'
import Footer from '../common/template/footer'
import Routes from './routes'

const App = props => (
  <HashRouter>
    <div className="wrapper">
      <Header />
      <Navbar />
      <Routes />
      <Footer />
      <Messages />
    </div>
  </HashRouter>
)

export default App