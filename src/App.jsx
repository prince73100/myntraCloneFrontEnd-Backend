
import './App.css'
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Outlet } from 'react-router-dom';
import FetchItem from './Component/FetchItem';

function App() {

  return (
    <>
     <Header></Header>
     <FetchItem></FetchItem>
     <Outlet/>
     <Footer></Footer>
    </>
  )
}

export default App
