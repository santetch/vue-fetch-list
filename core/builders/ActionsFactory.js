import GetPlanets from "../actions/GetPlanets.js";
import InfrastructureProvider from "./InfrastructureProvider.js"

class ActionsFactory {
    static planets = new GetPlanets(InfrastructureProvider.HttpClient);

    static getPlanets() {
        return this.planets;
    }
}

export default ActionsFactory;