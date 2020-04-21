import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PlanetFilterDataSet} from '../../_models/planets.model';

@Component({
    selector: 'app-filters-panel',
    templateUrl: './filters-panel.component.html',
    styleUrls: ['./filters-panel.component.css']
})
export class FiltersPanelComponent {

    @Input() filtersSuite: PlanetFilterDataSet;
    @Output() filtersValueChanged = new EventEmitter<PlanetFilterDataSet>();

    filtersChanged() {
        this.filtersValueChanged.emit(this.filtersSuite);
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
