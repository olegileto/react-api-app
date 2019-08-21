export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    getApi = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    };

    getAllPeople = async () => {
        const res = await this.getApi(`/people/`);
        return res.results.map(this._transformPerson)
    };

    getPerson = async (id) => {
        const person = await this.getApi(`/people/${id}/`);
        return this._transformPerson(person);
    };

     getAllPlanets = async () => {
        const res = await this.getApi(`/planets/`);
        return res.results.map(this._transformPlanet);
    };

     getPlanet = async (id) => {
        const planet = await this.getApi(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const res = await this.getApi(`/starships/`);
        return res.results.map(this._transformStarship);
    };

    getStarship = async (id) => {
        const starship = await this.getApi(`/starships/${id}/`);
        return this._transformStarship(starship);
    };

    _extractId(item) {
        const idRegEx = /\d/gi;
        return item.url.match(idRegEx).join('');
    }

    _transformPlanet = (planet) => {
        return {
            id: +this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transformPerson = (person) => {
        return {
            id: +this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };

    _transformStarship = (starship) => {
        return {
            id: +this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            length: starship.length,
            hyperdriveRating: starship.hyperdrive_rating
        }
    }
}
