import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./component/Header"
import Home from "./component/Home"
import Coins from "./component/Coins"
import CoinDetails from "./component/CoinDetails"
import Exchange from "./component/Exchange"
import Footer from "./component/Footer"


function App() {
  return <>
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/coins" element={<Coins />}/>
      <Route path="/coin/:id" element={<CoinDetails />}/>
      <Route path="/exchange" element={<Exchange />}/>
    </Routes>
  </Router>
  <Footer />

  </>
}

export default App;
