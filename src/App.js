
import './App.css';
import Cardslidertwo from './card2/cardslider2';
import Cardslider3 from './cardthree/cardslider3';
import Cardslider from './components/cardslider';


function App() {
  return (
    <div className="App">
   
     <h2 className='title'>Card design 1</h2>
      <Cardslider/>
      <h2 className='title'>Card design 2</h2>
      <Cardslidertwo/>
      <h2 className='title'>Card design 3</h2>
      <Cardslider3/>
    </div>
    
  );
}

export default App;
