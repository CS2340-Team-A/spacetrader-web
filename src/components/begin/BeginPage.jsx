import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const Layout = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default class BeginPage extends React.Component {
    handleBeginClick = () => {
        this.props.history.push("/config");
    };

    render() {
        return (
            <Layout>
                <Button onClick={this.handleBeginClick}>Begin Game</Button>
            </Layout>
        );
    }
}
