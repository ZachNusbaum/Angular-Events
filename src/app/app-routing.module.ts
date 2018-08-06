import { ScheduleComponent } from './events/schedule/schedule.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleEventsListComponent } from './events/simple-events-list/simple-events-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';

const routes: Routes = [
  { path: 'list', component: SimpleEventsListComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: '', component: ScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
