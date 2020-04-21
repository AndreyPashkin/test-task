import {Component} from '@angular/core';
import {TourFilterDataSet, ToursModel} from '../_models/tours.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {fetchJson} from '../_services/fetch-data.service';

@Component({
    selector: 'app-second-task',
    templateUrl: './second-task.component.html',
    styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent {

    filtersSuite: TourFilterDataSet = {
        textFilter: ''
    };
    columnNames: Array<string> = [
        'id тура',
        'Турфирма',
        'Тур',
        'Цена'
    ];
    toursInfo: Observable<Array<ToursModel>>;

    filtersValueChanged() {
        if (this.filtersSuite.textFilter) {
            const http$ = fetchJson('http://cb-test.tmweb.ru/api/get-tours.php?search=' + this.filtersSuite.textFilter);

            this.toursInfo = http$
                .pipe(
                    map(data => data.result)
                );
        } else {
            this.toursInfo = null;
        }
    }

}
