import React from "react";
import { observer, inject } from "mobx-react";
import { Paper, Typography, Button } from "@material-ui/core";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import Buy from "./Buy";
import Sell from "./Sell";

const Layout = styled(Paper)`
    max-width: 800px;
    margin: 50px auto;
    padding: 20px 30px;
`;

@inject("playerStore")
@observer
class MarketPage extends React.Component {
    handleBackClick = () => {
        this.props.history.push("/planet");
    };

    render() {
        const { sell, playerStore } = this.props;

        return (
            <Layout>
                <Typography variant="h4">
                    {sell ? "Sell Goods" : "Buy Goods"}
                </Typography>
                <Typography variant="body1">
                    Cargo Space: {playerStore.cargoSpace} /{" "}
                    {playerStore.state.cargoCapacity} <br />
                    Money: {playerStore.state.credits}
                </Typography>
                {sell ? <Sell /> : <Buy />}
                <Button
                    onClick={this.handleBackClick}
                    style={{ marginTop: "20px" }}
                    color="secondary"
                    variant="contained"
                >
                    Back
                </Button>
            </Layout>
        );
    }
}

export default withRouter(MarketPage);
