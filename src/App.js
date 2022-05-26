import "./App.css";

import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar/Navbar";
import Sales from './components/Sales/Sales'



function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className="body-areas">
        <Banner />
        <Sales />
        <Categories />
      </div>
    </div>
  );
}

export default App;
