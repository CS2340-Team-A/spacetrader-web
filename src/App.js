import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BeginPage from "./components/begin/BeginPage";
import ConfigPage from "./components/config/ConfigPage";

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={BeginPage} />
                <Route path="/config" exact component={ConfigPage} />
            </Router>
        );
    }
}

export default App;
