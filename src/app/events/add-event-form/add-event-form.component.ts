import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css']
})
export class AddEventFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addEvent(event) {
    console.log(event);
  }

}
