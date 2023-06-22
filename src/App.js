import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
   <Header/>
  <Categories/>
  <Products/>
  <br/><br/><br/><br/>
  <Footer/>
    </div>
  );
}

export default App;
