import { EventsService } from './../../events.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '../../event';

@Component({
  selector: 'simple-events-list',
  templateUrl: './simple-events-list.component.html',
  styleUrls: ['./simple-events-list.component.css']
})
export class SimpleEventsListComponent implements OnInit {

  constructor(private eventsApi: EventsService) { }

  events: Event[];

  ngOnInit() {
    this.eventsApi.listAll().subscribe( (data: Event[]) => {
      this.events = data;
    });
  }

  refreshEvents() {
    this.eventsApi.listAll().subscribe( (data: Event[]) => {
      this.events = data;
    });
  }

}