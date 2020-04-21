import {Component, Input} from '@angular/core';
import {ToursModel} from '../../_models/tours.model';

@Component({
    selector: 'app-tours-table',
    templateUrl: './tours-table.component.html',
    styleUrls: ['./tours-table.component.css']
})
export class ToursTableComponent {

    @Input() columnNames: Array<string>;
    @Input() toursInfo: Array<ToursModel>;

}
