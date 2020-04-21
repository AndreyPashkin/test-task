import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TourFilterDataSet} from '../../_models/tours.model';

@Component({
    selector: 'app-search-panel',
    templateUrl: './search-panel.component.html',
    styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent {

    @Input() filtersSuite: TourFilterDataSet;
    @Output() filtersValueChanged = new EventEmitter<string>();

    filtersChanged() {
        this.filtersValueChanged.emit(this.filtersSuite.textFilter);
    }

    resetFilters() {
        for (const filtersSuiteKey in this.filtersSuite) {
            if (this.filtersSuite.hasOwnProperty) {
                this.filtersSuite[filtersSuiteKey] = null;
            }
        }
        this.filtersChanged();
    }
}
