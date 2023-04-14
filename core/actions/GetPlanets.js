class GetPlanets {
    client;
    DEFAULT_PATH = "https://swapi.dev/api/planets"
    
    constructor(client) {
        this.client = client;
    }

    async execute(path) {
        const planets = path != undefined ?
            await this.client.get(path) :
            await this.client.get(this.DEFAULT_PATH);

        return planets;
    } 
}

export default GetPlanets;