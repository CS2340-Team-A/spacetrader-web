import { observable, action } from "mobx";
import {
    SYSTEM_NAMES,
    TECH_LEVELS,
    RESOURCES,
    TRADE_GOODS
} from "../constants";

const X_BOUND = 500;
const Y_BOUND = 500;

class Universe {
    @observable planets = [];

    @action.bound
    initialize() {
        const nameSet = new Set();

        for (let i = 0; i < 10; i++) {
            let nameRand = Math.floor(Math.random() * SYSTEM_NAMES.length);
            let systemName = SYSTEM_NAMES[nameRand];
            while (nameSet.has(systemName)) {
                nameRand = Math.floor(Math.random() * SYSTEM_NAMES.length);
                systemName = SYSTEM_NAMES[nameRand];
            }
            nameSet.add(systemName);

            const coordsX = Math.floor(Math.random() * X_BOUND);
            const coordsY = Math.floor(Math.random() * Y_BOUND);
            const resources =
                RESOURCES[Math.floor(Math.random() * RESOURCES.length)];
            const techLevel =
                TECH_LEVELS[Math.floor(Math.random() * TECH_LEVELS.length)];
            const tradeGoods = [];
            for (let goodKey in TRADE_GOODS) {
                const good = TRADE_GOODS[goodKey];
                if (good.MLTP <= techLevel || good.MLTU <= techLevel) {
                    const random = Math.random();
                    const addVariance = random < 0.5;
                    let price = good.basePrice;

                    if (good.MLTP > techLevel) {
                        price += good.IPL * (techLevel - good.MLTU);
                    } else {
                        price += good.IPL * (techLevel - good.MTLP);
                    }
                    if (addVariance) {
                        const varianceFactor = Math.random() * (good.var + 1);
                        price += Math.floor(price * varianceFactor);
                    }
                    let quantity =
                        Math.floor(Math.random * 70) -
                        4 * Math.abs(good.TTP - techLevel);
                    while (quantity <= 1) {
                        quantity =
                            Math.floor(Math.random * 70) -
                            5 * Math.abs(good.TTP - techLevel);
                    }

                    if (resources === good.CR) {
                        quantity *= 4;
                    } else if (resources === good.ER) {
                        quantity = Math.floor(quantity / 4);
                    }
                    tradeGoods.push({
                        name: goodKey,
                        quantity,
                        price
                    });
                }
            }

            this.planets.push({
                name: systemName,
                coordsX,
                coordsY,
                resources,
                techLevel
            });
        }
        console.log(this.planets[0].name);
    }
}

const singleton = new Universe();
export default singleton;
