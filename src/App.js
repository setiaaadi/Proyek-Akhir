import component, { Component } from "react";
import "./App.css";
import LifeCycle from "./component/LifeCycle";
import Home from "./component/Home";
import Profil from "./component/Profil";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowLifeCycle: true,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <Link to="/Home"> Home</Link>
            <br />
            <Link to="/Profil"> Profil</Link>
          </nav>
          <Switch>
          <Route path="/Home" component={Home} />
            <Route path="/Profil" component={Profil} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
