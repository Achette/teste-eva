import "./App.css";

import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className="body-areas">
        <Banner />
        
      </div>
    </div>
  );
}

export default App;
