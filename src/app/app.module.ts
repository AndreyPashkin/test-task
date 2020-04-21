import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetsTableComponent } from './first-task/planets-table/planets-table.component';
import { FiltersPanelComponent } from './first-task/filters-panel/filters-panel.component';
import {FormsModule} from '@angular/forms';
import { SecondTaskComponent } from './second-task/second-task.component';
import { FirstTaskComponent } from './first-task/first-task.component';
import { SearchPanelComponent } from './second-task/search-panel/search-panel.component';
import { ToursTableComponent } from './second-task/tours-table/tours-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsTableComponent,
    FiltersPanelComponent,
    SecondTaskComponent,
    FirstTaskComponent,
    SearchPanelComponent,
    ToursTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
