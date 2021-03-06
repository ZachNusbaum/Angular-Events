import { Event } from './event';
import { Injectable, Output, EventEmitter } from '@angular/core';
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

  addEvent(values: Event) {
    return this.http.post(api_base + 'events.json', values);
  }

  getEvent(id: string) {
    return this.http.get(api_base + `events/${id}.json`);
  }

  deleteEvent(id: string) {
    return this.http.delete(api_base + `events/${id}.json`);
  }

  updateEvent(id: string, values: any) {
    return this.http.patch(api_base + `events/${id}.json`, values);
  }
}
