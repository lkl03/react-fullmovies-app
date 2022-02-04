import 'swiper/css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';

function App() {
  return (
    <div>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path="/" element ={<Home/>} />
            <Route path="/:category/search/:keyword" element={<Catalog/>} />
            <Route path="/:category/" element={<Catalog/>} />
            <Route path="/:category/:id" element={<Detail/>} />
          </Routes>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;