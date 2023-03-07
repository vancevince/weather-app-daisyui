import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// state providers
import { GeographicProvder } from './context/geographic/GeographicContext';
import { AlertProvider } from './context/alert/AlertContext';

// pages
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import FiveDayForecast from './pages/FiveDayForecast';

// layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';


function App() {
  return (
    <GeographicProvder>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/forecast' element={<FiveDayForecast />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GeographicProvder>
  );
}

export default App;
