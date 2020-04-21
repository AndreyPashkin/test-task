import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
    title1 = 'Планеты';
    title2 = 'Экскурсии';
    tabs = {
        task1: true,
        task2: false
    };

    selectTab($event) {
        for (const tabsKey in this.tabs) {
            if (this.tabs.hasOwnProperty) {
                this.tabs[tabsKey] = false;
            }
        }
        this.tabs[$event.target.id] = true;

    }

}
