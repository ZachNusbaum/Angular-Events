import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { EventsService } from '../../events.service';

@Component({
  selector: 'add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css']
})
export class AddEventFormComponent implements OnInit {
  @Output() eventAdded = new EventEmitter<Event>();

  constructor(private eventsApi: EventsService) { }

  ngOnInit() {
  }

  addEvent(event) {
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

}
