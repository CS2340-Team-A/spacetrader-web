import React from "react";
import {
    Paper,
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Button,
    Snackbar,
    SnackbarContent
} from "@material-ui/core";
import Player, { PlayerTrunk } from "../../store/Player";
import Universe, { UniverseTrunk } from "../../store/Universe";
import styled from "styled-components";

const Layout = styled(Paper)`
    max-width: 800px;
    margin: 50px auto;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class ConfigPage extends React.Component {
    state = {
        open: false,
        reason: "",
        name: "",
        fighterPoints: 0,
        traderPoints: 0,
        pilotPoints: 0,
        engineerPoints: 0,
        difficulty: 1
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleStart = () => {
        const {
            name,
            fighterPoints,
            traderPoints,
            pilotPoints,
            engineerPoints
        } = this.state;
        const fPoints = parseInt(fighterPoints, 10);
        const tPoints = parseInt(traderPoints, 10);
        const pPoints = parseInt(pilotPoints, 10);
        const ePoints = parseInt(engineerPoints, 10);

        if (!name) {
            this.setState({
                reason: "Please enter a valid name!",
                open: true
            });
        } else if (fPoints < 0 || tPoints < 0 || pPoints < 0 || ePoints < 0) {
            this.setState({
                reason: "Points cannot be negative!",
                open: true
            });
        } else if (fPoints + tPoints + pPoints + ePoints !== 16) {
            this.setState({
                reason: "Points must add up to 16!",
                open: true
            });
        } else {
            Player.setName(name);
            Player.setPoints(fPoints, ePoints, pPoints, tPoints);
            PlayerTrunk.persist();
            Universe.initialize();
            UniverseTrunk.persist();
            this.props.history.push("/planet");
        }
    };

    handleSnackClose = () => {
        this.setState({
            open: false,
            reason: ""
        });
    };

    render() {
        return (
            <Layout>
                <Snackbar
                    open={this.state.open}
                    variant="error"
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    autoHideDuration={2000}
                    onClose={this.handleSnackClose}
                >
                    <SnackbarContent
                        style={{ backgroundColor: "#d32f2f" }}
                        message={<span>{this.state.reason}</span>}
                    />
                </Snackbar>
                <Form noValidate={true} autoComplete="off">
                    <TextField
                        id="name"
                        placeholder="Name"
                        label="Name"
                        value={this.state.name}
                        onChange={this.handleChange("name")}
                        margin="normal"
                    />
                    <TextField
                        id="fighter-points"
                        label="Fighter Points"
                        value={this.state.fighterPoints}
                        onChange={this.handleChange("fighterPoints")}
                        type="number"
                        InputLabelProps={{
                            shrink: true
                        }}
                        margin="normal"
                    />
                    <TextField
                        id="trader-points"
                        label="Trader Points"
                        value={this.state.traderPoints}
                        onChange={this.handleChange("traderPoints")}
                        type="number"
                        InputLabelProps={{
                            shrink: true
                        }}
                        margin="normal"
                    />
                    <TextField
                        id="pilot-points"
                        label="Pilot Points"
                        value={this.state.pilotPoints}
                        onChange={this.handleChange("pilotPoints")}
                        type="number"
                        InputLabelProps={{
                            shrink: true
                        }}
                        margin="normal"
                    />
                    <TextField
                        id="engineer-points"
                        label="Engineer Points"
                        value={this.state.engineerPoints}
                        onChange={this.handleChange("engineerPoints")}
                        type="number"
                        InputLabelProps={{
                            shrink: true
                        }}
                        margin="normal"
                    />
                    <FormControl margin="normal">
                        <InputLabel>Select Difficulty</InputLabel>
                        <Select
                            style={{ width: "167px" }}
                            value={this.state.difficulty}
                            onChange={this.handleChange("difficulty")}
                        >
                            <MenuItem value={1}>
                                <em>Easy</em>
                            </MenuItem>
                            <MenuItem value={2}>Medium</MenuItem>
                            <MenuItem value={3}>Hard</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        style={{ margin: "25px 0" }}
                        variant="contained"
                        color="primary"
                        onClick={this.handleStart}
                    >
                        Start Game
                    </Button>
                </Form>
            </Layout>
        );
    }
}

export default ConfigPage;
