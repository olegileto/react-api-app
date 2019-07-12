export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getApi(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getApi(`/people/`);
        return res.results.map(this._transformPlanet)
    }

    async getPerson(id) {
        const person = await this.getApi(`/people/${id}/`);
        return this._transformPlanet(person);
    }

    async getAllPlanets() {
        const res = await this.getApi(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getApi(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getApi(`/starships/`);
        return res.results.map(this._transformPlanet);
    }

    async getStarship(id) {
        const starship = await this.getApi(`/starship/${id}/`);
        return this._transformPlanet(starship);
    }

    _extractId(item) {
        const idRegEx = /\d/gi;
        return item.url.match(idRegEx).join('');
    }

    _transformPlanet(planet) {
        return {
            id: +this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
}
