import { observable, action, computed } from "mobx";

class PlayerStore {
    @observable
    state = {
        name: "",
        fighterPoints: 0,
        engineerPoints: 0,
        pilotPoints: 0,
        traderPoints: 0,
        planetIndex: 0,
        credits: 1000,
        fuel: 500,
        fuelCapacity: 500,
        cargoHold: [],
        cargoCapacity: 20
    };

    @action.bound
    setName(name) {
        this.state.name = name;
    }

    @action.bound
    setPoints(fighterPoints, engineerPoints, pilotPoints, traderPoints) {
        this.state.fighterPoints = fighterPoints;
        this.state.engineerPoints = engineerPoints;
        this.state.pilotPoints = pilotPoints;
        this.state.traderPoints = traderPoints;
    }

    @computed get cargoSpace() {
        let space = 0;
        for (let cargo of this.state.cargoHold) {
            space += cargo.quantity;
        }
        return space;
    }
}

const singleton = new PlayerStore();
export default singleton;
