import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BeginPage from "./components/begin/BeginPage";
import ConfigPage from "./components/config/ConfigPage";
import PlanetPage from "./components/planet/PlanetPage";
import TravelPage from "./components/travel/TravelPage";
import MarketPage from "./components/market/MarketPage";
import { Provider } from "mobx-react";
import Universe from "./store/Universe";
import Player from "./store/Player";

class App extends Component {
    render() {
        return (
            <Provider
                planets={Universe.planets}
                player={Player.state}
                playerStore={Player}
            >
                <Router>
                    <Route path="/" exact component={BeginPage} />
                    <Route path="/config" exact component={ConfigPage} />
                    <Route path="/planet" exact component={PlanetPage} />
                    <Route path="/travel" exact component={TravelPage} />
                    <Route
                        path="/buy"
                        exact
                        render={() => {
                            return <MarketPage sell={false} />;
                        }}
                    />
                    <Route
                        path="/sell"
                        exact
                        render={() => {
                            return <MarketPage sell={true} />;
                        }}
                    />
                </Router>
            </Provider>
        );
    }
}

export default App;
