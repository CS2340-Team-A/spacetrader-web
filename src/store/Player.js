import { observable, action } from "mobx";

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
        cargoHold: []
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
}

const singleton = new PlayerStore();
export default singleton;
