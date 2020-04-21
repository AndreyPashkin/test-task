import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {PlanetInfo} from '../../_models/planets.model';

@Component({
    selector: 'app-planets-table',
    templateUrl: './planets-table.component.html',
    styleUrls: ['./planets-table.component.css']
})
export class PlanetsTableComponent {

    @Input() columnNames: Array<string>;
    @Input() planetsInfo: Observable<Array<PlanetInfo>>;

}
