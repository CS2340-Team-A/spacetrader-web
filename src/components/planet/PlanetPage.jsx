import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";
import { TECH_LEVELS } from "../../constants";
import styled from "styled-components";

const Container = styled(Paper)`
    margin: 0 auto;
    width: 600px;
    margin-top: 50px;
    padding: 20px 30px;
`;
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 25px 0;
`;

@inject("planets", "player")
@observer
class PlanetPage extends React.Component {
    handleTravelClicked = () => {
        this.props.history.push("/travel");
    };

    handleBuyClicked = () => {
        this.props.history.push("/buy");
    };

    handleSellClicked = () => {
        this.props.history.push("/sell");
    };

    render() {
        console.log(this.props.planets[0].name);
        const planet = toJS(this.props.planets[this.props.player.planetIndex]);
        return (
            <Container>
                <Typography variant="h3" gutterBottom>
                    {planet.name}
                </Typography>
                <Typography>
                    {planet.name} has the following resource: {planet.resources}{" "}
                    <br />
                    It is at the {planet.techLevel} age with technology level of{" "}
                    {TECH_LEVELS.indexOf(planet.techLevel)}
                </Typography>
                <ButtonContainer>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.handleTravelClicked}
                    >
                        Travel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleBuyClicked}
                    >
                        Buy
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.handleSellClicked}
                    >
                        Sell
                    </Button>
                </ButtonContainer>
            </Container>
        );
    }
}

export default PlanetPage;
