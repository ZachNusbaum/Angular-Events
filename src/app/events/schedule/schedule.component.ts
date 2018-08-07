import { EventsService } from './../../events.service';
import { Component, OnInit } from '@angular/core';
import { Options } from 'fullcalendar';
import { Router } from '@angular/router';
@Component({
  selector: 'events-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  events: any[] = [];
  viewDate = Date.now();
  calendarOptions: Options;

  constructor(private eventsApi: EventsService, private route: Router) { }

  ngOnInit() {
    this.refreshCalendar();
  }

  eventClicked(event) {
    console.log(event);
    this.route.navigateByUrl(`/event/${event.detail.event.token}`);
  }
  eventDropped(event) {
    console.log('Dropped!', event);
  }

  refreshCalendar() {
    this.eventsApi.listAll().subscribe((response: Object[]) => {
      this.events = response;
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        events: response
      };
    });
  }
}
