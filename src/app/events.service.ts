import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api_base = 'https://peaceful-journey-78842.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http.get(api_base + 'events.json');
  }
}
