import React, { useEffect, useState } from 'react'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import Banner from "./components/Banner/Banner";
import Carrosel from "./components/Carrosel";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import NewsField from "./components/NewsField";
import Sales from './components/Sales/Sales'




function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then(setData)
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="body-areas">
        <Banner />
        {/* <Sales />
        <Categories />
        <Carrosel title="Destaques" data={data} />
        <Carrosel title="Destaques em eletrônicos" data={data.filter(item => item.category === 'electronics')} />
        <Carrosel title="Destaques em jóias" data={data.filter(item => item.category === "jewelery")}/>
        <Carrosel title="Destaques em vestuário masculino" data={data.filter(item => item.category === "men's clothing")}/>
        <NewsField />
        <Footer /> */}
       
      </div>
    </div>
  );
}

export default App;
