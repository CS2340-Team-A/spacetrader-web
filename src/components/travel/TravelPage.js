import React from "react";
import {
    Paper,
    Typography,
    FormControl,
    Select,
    MenuItem,
    Card,
    CardContent,
    LinearProgress,
    Button
} from "@material-ui/core";
import styled from "styled-components";
import { observer, inject } from "mobx-react";
import { TECH_LEVELS } from "../../constants";
import Player from "../../store/Player";
import { toJS } from "mobx";

const Layout = styled(Paper)`
    width: 800px;
    padding: 20px 30px;
    margin: 0 auto;
    margin-top: 50px;
`;

const distanceBetween = (x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.floor(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));
};

@inject("planets", "player")
@observer
class TravelPage extends React.Component {
    state = {
        selected: 0,
        reachablePlanets: []
    };

    handleClick = () => {
        const selectedPlanet = this.state.reachablePlanets[this.state.selected];
        const planets = toJS(this.props.planets);
        const currPlanet = planets[this.props.player.planetIndex];
        let planetIdx = 0;
        for (; planetIdx < planets.length; planetIdx++) {
            if (planets[planetIdx].name === selectedPlanet.name) {
                break;
            }
        }
        const distance = distanceBetween(
            currPlanet.coordsX,
            currPlanet.coordsY,
            selectedPlanet.coordsX,
            selectedPlanet.coordsY
        );
        Player.state.fuel -= distance;
        Player.state.planetIndex = planetIdx;
        this.props.history.push("/planet");
    };

    handleBackClick = () => {
        this.props.history.push("/planet");
    };

    handleSelect = e => {
        this.setState({
            selected: e.target.value
        });
    };

    componentDidMount() {
        const { planets, player } = this.props;
        const jsPlanets = toJS(planets);
        const currPlanet = jsPlanets[player.planetIndex];
        const reachablePlanets = jsPlanets.filter(planet => {
            return (
                distanceBetween(
                    currPlanet.coordsX,
                    currPlanet.coordsY,
                    planet.coordsX,
                    planet.coordsY
                ) <= player.fuel
            );
        });

        this.setState({
            reachablePlanets
        });
    }

    render() {
        const { selected, reachablePlanets } = this.state;
        const { player } = this.props;

        const selectedPlanet = reachablePlanets[selected];

        return (
            <Layout>
                <Typography variant="h4">Choose Destination</Typography>
                <FormControl>
                    <Select
                        style={{ width: "200px", marginTop: "20px" }}
                        value={this.state.selected}
                        onChange={this.handleSelect}
                    >
                        {reachablePlanets.map((planet, idx) => (
                            <MenuItem key={planet.name + idx} value={idx}>
                                {planet.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {selectedPlanet && (
                    <>
                        <Card
                            style={{
                                marginTop: "25px",
                                backgroundColor: "#1976d2"
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5">
                                    Planet Info
                                </Typography>
                                <Typography component="p">
                                    {selectedPlanet.name} has the following
                                    resource: {selectedPlanet.resources} <br />
                                    It is at the {selectedPlanet.techLevel} age
                                    with technology level of{" "}
                                    {TECH_LEVELS.indexOf(
                                        selectedPlanet.techLevel
                                    )}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Typography
                            style={{ marginTop: "25px" }}
                            variant="subtitle1"
                        >
                            Fuel
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={(player.fuel / player.fuelCapacity) * 100}
                        />
                        <Button
                            style={{ margin: "20px auto" }}
                            variant="contained"
                            color="primary"
                            onClick={this.handleClick}
                        >
                            Travel
                        </Button>
                        <Button
                            style={{ margin: "20px 20px" }}
                            variant="contained"
                            color="secondary"
                            onClick={this.handleBackClick}
                        >
                            Back
                        </Button>
                    </>
                )}
            </Layout>
        );
    }
}

export default TravelPage;
