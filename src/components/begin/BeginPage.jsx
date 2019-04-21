import React from "react";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import Universe, { UniverseTrunk } from "../../store/Universe";
import Player, { PlayerTrunk } from "../../store/Player";

const Layout = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export default class BeginPage extends React.Component {
    handleNewGameClick = () => {
        Player.reset();
        Universe.reset();
        UniverseTrunk.clear();
        PlayerTrunk.clear();
        this.props.history.push("/config");
    };

    handleContinueClick = () => {
        this.props.history.push("/planet");
    };

    render() {
        console.log(Player.state.name);
        return (
            <Layout>
                <Typography variant="h3">Space Trader</Typography>
                <div
                    style={{
                        marginTop: "25px",
                        display: "flex",
                        flexDirection: "row"
                    }}
                >
                    {!!Player.state.name.length && (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleContinueClick}
                            style={{ marginRight: "20px" }}
                        >
                            Continue
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.handleNewGameClick}
                    >
                        New Game
                    </Button>
                </div>
            </Layout>
        );
    }
}
