import { EventsService } from './../../events.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Event } from '../../event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  id: string;
  event: Event;

  constructor(private router: Router, private route: ActivatedRoute, private eventsApi: EventsService) { }

  ngOnInit() {
    this.route.params.subscribe( (params: any) => {
      this.id = params.id;
      console.log(params);
      this.eventsApi.getEvent(params.id).subscribe((response: any) => {
        this.event = response;
      });
    });
  }

  deleteEvent(): void {
    if (confirm('Are you sure?')) {
      this.eventsApi.deleteEvent(this.id).subscribe((response: any) => {
        this.router.navigateByUrl('/');
      });
    }
  }

}