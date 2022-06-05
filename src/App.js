import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import MainPage from './components/Page/MainPage';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AboutPage from './components/Page/AboutPage';
import ProductsPage from './components/Page/ProductsPage';
import ContactPage from './components/Page/ContactPage';

function App() {
 
  return (
    <BrowserRouter>
      <>
        <Header/>
        <Menu/>
        <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  );
}




export default App;
