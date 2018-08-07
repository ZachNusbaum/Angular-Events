import { EventsService } from './../../events.service';
import { Component, OnInit } from '@angular/core';
import { Options } from 'fullcalendar';
import { Router } from '@angular/router';
import { Event } from '../../event';
@Component({
  selector: 'events-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  events: Event[] = [];
  viewDate: number = Date.now();
  calendarOptions: Options;

  constructor(private eventsApi: EventsService, private route: Router) { }

  ngOnInit() {
    this.refreshCalendar();
  }

  eventClicked(event: CustomEvent): void {
    console.log(event);
    this.route.navigateByUrl(`/event/${event.detail.event.token}`);
  }
  eventDropped(event: CustomEvent): void {
    console.log('Dropped!', event);
    const changes = {
      starts_at: event.detail.event.start,
      ends_at: event.detail.event.end
    };
    this.eventsApi.updateEvent(event.detail.event.token, changes).subscribe(
      (response: Event) => { alert('Event updated!'); console.log('Updated!', response); },
      (error: any) => { console.error('Could not update', error); }
    );
  }

  refreshCalendar(): void {
    this.eventsApi.listAll().subscribe((response: Event[]) => {
      this.events = response;
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        events: response,
        timezone: 'local',
        header: {
          left: 'title',
          center: 'month,listMonth,agendaWeek',
          right: 'today prev,next'
        }
      };
    });
  }
}
