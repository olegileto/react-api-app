export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getApi (url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople () {
        const res = await this.getApi(`/people/`);
        return res.results;
    }

    getPerson (id) {
        return this.getApi(`/people/${id}/`);
    }

    async getAllPlanets () {
        const res = await this.getApi(`/planets/`);
        return res.results;
    }

    getPlanet (id) {
        return this.getApi(`/planets/${id}`)
    }

    async getAllStarships () {
        const res = await this.getApi(`/starships`);
        return res.results;
    }

    getStarship (id) {
        return this.getApi(`/starship/${id}`)
    }
}
