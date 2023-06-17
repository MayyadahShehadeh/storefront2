import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
   <Header/>
  <Categories/>
  <Products/>
    </div>
  );
}

export default App;
