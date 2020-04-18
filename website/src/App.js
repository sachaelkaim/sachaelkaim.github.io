import React, { Fragment } from 'react'
import './App.css'
import AnimationFront from './components/Navbar'
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <Fragment>
    <Layout />
    <AnimationFront />
    </Fragment>
  )
}

export default App;
