import React, { Fragment } from 'react'
import './App.css'
import Viewpager from './components/Navbar'
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <Fragment>
    <Layout />
    <Viewpager />
    </Fragment>
  )
}

export default App;
