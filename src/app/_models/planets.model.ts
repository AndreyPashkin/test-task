export class PlanetsModel {
    count: number;
    next: string;
    previous: string;
    results: Array<PlanetInfo>;
}

export class PlanetInfo {
    name: string;
    rotation_period: number;
    orbital_period: number;
    diameter: number;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: number;
    population: number;
    residents: Array<string>;
    films: Array<string>;
    created: string;
    edited: string;
    url: string;
}

export class PlanetFilterDataSet {
    textFilter: string;
    diameterFilterMin: number;
    diameterFilterMax: number;
    populationFilterMin: number;
    populationFilterMax: number;
}
