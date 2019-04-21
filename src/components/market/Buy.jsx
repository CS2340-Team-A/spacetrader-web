import React from "react";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";
import Player, { PlayerTrunk } from "../../store/Player";
import Universe, { UniverseTrunk } from "../../store/Universe";
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
    handleBuyClicked = name => () => {
        const { planets, player } = this.props;
        const jsPlanets = toJS(planets);
        const currPlanet = jsPlanets[player.planetIndex];
        const tradeGood = currPlanet.tradeGoods[name];
        if (
            tradeGood &&
            tradeGood.quantity > 0 &&
            player.credits >= tradeGood.price &&
            Player.cargoSpace < player.cargoCapacity
        ) {
            Universe.planets[player.planetIndex].tradeGoods[name].quantity -= 1;
            Player.state.credits -= tradeGood.price;
            if (!!Player.state.cargoHold[name]) {
                Player.state.cargoHold[name].quantity += 1;
            } else {
                Player.state.cargoHold[name] = {
                    name: name,
                    quantity: 1
                };
            }
            PlayerTrunk.persist();
            UniverseTrunk.persist();
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
                        <TableCell># in Market</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Button</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.values(currPlanet.tradeGoods).map((good, idx) => (
                        <TableRow key={good.name + idx}>
                            <TableCell>{good.name}</TableCell>
                            <TableCell>{good.quantity}</TableCell>
                            <TableCell>{good.price}</TableCell>
                            <TableCell>
                                <Button
                                    onClick={this.handleBuyClicked(good.name)}
                                >
                                    Buy
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

export default Buy;
