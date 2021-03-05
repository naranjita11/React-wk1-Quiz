import './App.css';
import Multiplier from "./Components/Multiplier";
import EvenClicks from "./Components/EvenClicks";

const App = () => (
  <>
    <Multiplier x={ 5 } y={ 7 } />
    <EvenClicks />
  </>
);

export default App;
