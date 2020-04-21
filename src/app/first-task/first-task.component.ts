import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PlanetFilterDataSet, PlanetInfo, PlanetsModel} from '../_models/planets.model';
import {fetchJson} from '../_services/fetch-data.service';
import {map, shareReplay} from 'rxjs/operators';

@Component({
    selector: 'app-first-task',
    templateUrl: './first-task.component.html',
    styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent implements OnInit {

    planets$: Observable<PlanetsModel>;
    planetsQty: Observable<number>;
    planetsInfo: Observable<Array<PlanetInfo>>;

    filtersSuite: PlanetFilterDataSet = {
        textFilter: '',
        diameterFilterMin: null,
        diameterFilterMax: null,
        populationFilterMin: null,
        populationFilterMax: null
    };
    columnNames: Array<string> = [
        'Name',
        'Rotation period',
        'Orbital period',
        'Diameter',
        'Climate',
        'Gravity',
        'Terrain',
        'Surface water',
        'Population'
    ];

    ngOnInit(): void {

        const http$ = fetchJson('/assets/json/planets.json');

        this.planets$ = http$
            .pipe(
                shareReplay()
            );

        this.planetsQty = this.planets$
            .pipe(
                map(data => data.count)
            );

        this.planetsInfo = this.planets$
            .pipe(
                map(data => data.results)
            );
    }

    filtersValueChanged() {
        if (this.filtersSuite.textFilter === null) {
            this.filtersSuite.textFilter = '';
        }
        this.planetsInfo = this.planets$
            .pipe(
                map(data => data.results
                    .filter(planet => planet.name.toUpperCase().includes(this.filtersSuite.textFilter.toUpperCase()))
                    .filter(planet =>
                        this.filtersSuite.diameterFilterMin ? planet.diameter >= this.filtersSuite.diameterFilterMin : planet)
                    .filter(planet =>
                        this.filtersSuite.diameterFilterMax ? planet.diameter <= this.filtersSuite.diameterFilterMax : planet)
                    .filter(planet =>
                        this.filtersSuite.populationFilterMin ? planet.population >= this.filtersSuite.populationFilterMin : planet)
                    .filter(planet =>
                        this.filtersSuite.populationFilterMax ? planet.population <= this.filtersSuite.populationFilterMax : planet)
                )
            );
    }

}
