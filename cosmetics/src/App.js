import './App.css';
import Header from './Components/Header/Header';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Container from './Components/Container/Container';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Router>
        <Routes> */}
          <Container/>
        {/* </Routes>
      </Router> */}
      <Footer/>
    </div>
  );
}

export default App;
