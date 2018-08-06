import { EventsService } from './../../events.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Event } from '../../event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  id: any;
  event: Event;

  constructor(private route: ActivatedRoute, private eventsApi: EventsService) { }

  ngOnInit() {
    this.route.params.subscribe( (params: any) => {
      console.log(params);
      this.eventsApi.getEvent(params.id).subscribe((response: any) => {
        this.event = response;
      });
    });
  }

}