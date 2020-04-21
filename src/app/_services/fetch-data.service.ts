import {Observable} from 'rxjs';
import {PlanetsModel} from '../_models/planets.model';
import {ToursModel} from '../_models/tours.model';

export function fetchJson(url: string): Observable<any>{

    return new Observable(observer => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(body => {
                observer.next(body);
                observer.complete();
            })
            .catch(err => {
                observer.error(err);
            });
    });
}
