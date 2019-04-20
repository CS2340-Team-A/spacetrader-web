import React from "react";
import {
    Paper,
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Button
} from "@material-ui/core";
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

    render() {
        return (
            <Layout>
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
                    >
                        Start Game
                    </Button>
                </Form>
            </Layout>
        );
    }
}

export default ConfigPage;
