import "./App.css";

import Banner from "./components/Banner/Banner";
import Carrosel from "./components/Carrosel";

import Categories from "./components/Categories";
import Navbar from "./components/Navbar/Navbar";
import NewsField from "./components/NewsField";
import Sales from './components/Sales/Sales'



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body-areas">
        <Banner />
        <Sales />
        <Categories />
        <Carrosel title="Destaques" />
        <Carrosel title="Destaques em livros" />
        <Carrosel title="Destaques em escritório" />
        <Carrosel title="Destaques em vestuário" />
        <NewsField />
      </div>
    </div>
  );
}

export default App;
