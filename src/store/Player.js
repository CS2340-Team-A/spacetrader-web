import { observable, action, computed } from "mobx";
import { SyncTrunk } from "mobx-sync";

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
        cargoHold: {},
        cargoCapacity: 20
    };

    @action.bound
    reset() {
        this.state.name = "";
        this.state.fighterPoints = 0;
        this.state.engineerPoints = 0;
        this.state.pilotPoints = 0;
        this.state.traderPoints = 0;
        this.state.planetIndex = 0;
        this.state.credits = 1000;
        this.state.fuel = 500;
        this.state.fuelCapacity = 500;
        this.state.cargoHold = {};
        this.state.cargoCapacity = 20;
    }

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
        Object.values(this.state.cargoHold).forEach(cargo => {
            space += cargo.quantity;
        });
        return space;
    }
}

const singleton = new PlayerStore();
export const PlayerTrunk = new SyncTrunk(singleton, {
    storage: localStorage,
    storageKey: "player_trunk"
});
PlayerTrunk.init();
export default singleton;
