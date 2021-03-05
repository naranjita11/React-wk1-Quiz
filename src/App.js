import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Multiplier from "./Components/Multiplier";
import EvenClicks from "./Components/EvenClicks";
import CountBy from "./Components/CountBy";
import HideMe from "./Components/HideMe";
import MinimumLength from "./Components/MinimumLength";

const App = () => (
  <Router> 
    <>
        <Route exact path="/multiplier/:x/:y" render={ ({ match }) => (
          <Multiplier x={ match.params.x } y={ match.params.y } />
        ) } />

        <Route exact path="/even-clicks">
          <EvenClicks />
        </Route>

        <Route exact path="/count-by/:step" render={ ({ match }) => (
          <CountBy step={ match.params.step } />
        ) } />

        <Route exact path="/hide-me">
          <HideMe>Blah blah blah</HideMe>
        </Route>

        <Route exact path="/minimum/:length" render={ ({ match }) => (
          <MinimumLength length={ match.params.length } />
        ) } />
    </>
  </Router> 
);

export default App;
