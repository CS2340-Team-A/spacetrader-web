import { observable } from "mobx";

class PlayerStore {
    constructor() {}

    @observable state = {
        name: "",
        fighterPoints: 0,
        engineerPoints: 0,
        pilotPoints: 0,
        traderPoints: 0
    };
}
