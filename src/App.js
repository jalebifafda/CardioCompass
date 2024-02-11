import "./App.css";
import Home from "./Home";
import Results from "./Results";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Switch>
    <Route path="/" component={Home} />
    <Route path="/results" component={Results} />
    </Switch>
  );
}

export default App;
