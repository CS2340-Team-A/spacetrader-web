import React from "react";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";
import Player from "../../store/Player";
import Universe from "../../store/Universe";
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
class Sell extends React.Component {
    handleSellClicked = name => () => {
        const { player, planets } = this.props;
        const tradeGood = player.cargoHold[name];
        if (tradeGood && tradeGood.quantity > 0) {
            const price = planets[player.planetIndex].tradeGoods[name].price;
            Universe.planets[player.planetIndex].tradeGoods[name].quantity += 1;
            Player.state.credits += price;
            Player.state.cargoHold[name].quantity -= 1;
        }
    };

    render() {
        const { planets, player } = this.props;
        const jsPlanets = toJS(planets);
        const currPlanet = jsPlanets[player.planetIndex];

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell># in Cargo Hold</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Button</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.values(player.cargoHold).map((good, idx) => (
                        <TableRow key={good.name + idx}>
                            <TableCell>{good.name}</TableCell>
                            <TableCell>{good.quantity}</TableCell>
                            <TableCell>
                                ${currPlanet.tradeGoods[good.name].price}
                            </TableCell>
                            <TableCell>
                                <Button
                                    onClick={this.handleSellClicked(good.name)}
                                >
                                    Sell
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

export default Sell;
