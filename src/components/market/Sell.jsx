import React from "react";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button
} from "@material-ui/core";

@inject("planets", "player")
@observer
class Buy extends React.Component {
    componentDidMount() {}

    render() {
        const { planets, player } = this.props;
        const jsPlanets = toJS(planets);
        const currPlanet = jsPlanets[player.planetIndex];
        console.log(currPlanet);

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell align="right"># in Market</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currPlanet.tradeGoods.map((good, idx) => (
                        <TableRow key={good.name + idx}>
                            <TableCell>{good.name}</TableCell>
                            <TableCell>{good.quantity}</TableCell>
                            <TableCell>{good.price}</TableCell>
                            <TableCell>
                                <Button>Buy</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

export default Buy;
