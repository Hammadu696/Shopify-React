import "./App.css";
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import{Navbar} from './components/Navbar';
import{Home} from './pages/home/home';
import { CartContextProvider } from "./context/cart-context";
import './components/single_product.css'
function App(){
  
  return <div className="App">
    <CartContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/contact" />
            <Route path="/shop" />
            <Route path="/about" />
            <Route path="/blog" />
          </Routes>
        </Router>

        </CartContextProvider>
      
     </div>
}

export default App;