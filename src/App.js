import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import SecondSection from './components/SecondSection';
import Footer from './components/Footer';
import Accordian from './components/Accordian';

function App() {
  return (
    <main className="App">
      <Header/>
      <SecondSection/>
      <br/>
      <br/>
      <Main/>
      <Accordian/>
      <Footer/>
      
    </main>
  );
}

export default App;
