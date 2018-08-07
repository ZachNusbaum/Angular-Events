import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EventsService } from '../../events.service';
import { Event } from '../../event';
import flatpickr from 'flatpickr';

@Component({
  selector: 'add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css']
})
export class AddEventFormComponent implements OnInit, AfterViewInit {
  @Output() eventAdded = new EventEmitter<Event>();

  model: Event = {
    title: '',
    starts_at: new Date(),
    ends_at: null,
    description: '',
    background_color: '#008B8B'
  };

  start_date: Date;
  @ViewChild('startsAt') startsAt: ElementRef;
  @ViewChild('endsAt') endsAt: ElementRef;

  constructor(private eventsApi: EventsService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    flatpickr(this.startsAt.nativeElement, {
      enableTime: true,
      altFormat: 'F j, Y h:i K',
      altInput: true,
      dateFormat: 'Z',
      defaultDate: this.model.starts_at
    });
    flatpickr(this.endsAt.nativeElement, {
      enableTime: true,
      altFormat: 'F j, Y h:i K',
      altInput: true,
      dateFormat: 'Z',
    });
  }

  addEvent(event): boolean | void {
    if (event.invalid === true) { return false; }
    console.log(event);
    this.eventsApi.addEvent(event.value).subscribe( (response: any) => {
      console.log('Event added!', response);
      this.eventAdded.emit(event.value);
      event.reset();
    }, (error: any) => {
      alert('There was an error adding the event. Check the console.');
      console.log('Error:', error);
    });
  }

  startDateChanged(event): void {
    console.log('Start date changed', event);
    this.start_date = event.value;
  }

}
