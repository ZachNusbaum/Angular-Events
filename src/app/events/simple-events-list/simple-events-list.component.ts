import { AddEventFormComponent } from './../add-event-form/add-event-form.component';
import { EventsService } from './../../events.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Event } from '../../event';

@Component({
  selector: 'simple-events-list',
  templateUrl: './simple-events-list.component.html',
  styleUrls: ['./simple-events-list.component.css']
})
export class SimpleEventsListComponent implements OnInit {
  @ViewChild(AddEventFormComponent) eventForm = AddEventFormComponent;

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