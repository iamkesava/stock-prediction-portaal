import { useState } from 'react';
import './assets/css/style.css';
import Header from './assets/componenets/Header';
import Footer from './assets/componenets/Footer';
import Main from './assets/componenets/Main';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App

